import type { VercelRequest, VercelResponse } from "@vercel/node";

const NOTION_API_URL = "https://api.notion.com/v1/pages";

interface BookingData {
    name: string;
    contact: string;
    address: string;
    package: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle OPTIONS preflight request
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, contact, address, package: packageType } = req.body as BookingData;

    // Validate required fields
    if (!name || !contact || !address || !packageType) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const notionApiKey = process.env.NOTION_API_KEY;
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!notionApiKey || !databaseId) {
        console.error("Missing Notion API key or Database ID");
        return res.status(500).json({ error: "Server configuration error" });
    }

    // Map package values to display names
    const packageDisplayNames: Record<string, string> = {
        basic: "Basic (Hand OR Foot)",
        standard: "Standard (Hand AND Foot)",
        premium: "Premium (Family / Sibling)",
    };

    try {
        const response = await fetch(NOTION_API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${notionApiKey}`,
                "Content-Type": "application/json",
                "Notion-Version": "2022-06-28",
            },
            body: JSON.stringify({
                parent: { database_id: databaseId },
                properties: {
                    Name: {
                        title: [
                            {
                                text: {
                                    content: name,
                                },
                            },
                        ],
                    },
                    Contact: {
                        phone_number: contact,
                    },
                    Address: {
                        rich_text: [
                            {
                                text: {
                                    content: address,
                                },
                            },
                        ],
                    },
                    Package: {
                        rich_text: [
                            {
                                text: {
                                    content: packageDisplayNames[packageType] || packageType,
                                },
                            },
                        ],
                    },
                    "Submitted at": {
                        rich_text: [
                            {
                                text: {
                                    content: new Date().toLocaleString(),
                                },
                            },
                        ],
                    },
                },
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Notion API error:", errorData);
            return res.status(response.status).json({
                error: "Failed to create booking in Notion",
                details: errorData
            });
        }

        const data = await response.json();
        return res.status(200).json({
            success: true,
            message: "Booking created successfully",
            id: data.id
        });
    } catch (error) {
        console.error("Error creating Notion page:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}
