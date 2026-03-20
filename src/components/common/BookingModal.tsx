import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar, User, Phone, MapPin, Sparkles, Loader2, X } from "lucide-react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        address: "",
        package: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/notion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to submit booking");
            }

            toast.success("Booking request received! We will contact you shortly.");
            onClose();
            setFormData({ name: "", contact: "", address: "", package: "" });
        } catch (error) {
            console.error("Error submitting booking:", error);
            toast.error("Failed to submit booking. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePackageChange = (value: string) => {
        setFormData((prev) => ({ ...prev, package: value }));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden rounded-2xl border-0">
                {/* Frosty Glass Container */}
                <div className="relative rounded-2xl overflow-hidden">
                    {/* Frosted glass background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/60 backdrop-blur-xl" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                    
                    {/* Decorative gradient orbs */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-purple-400/20 blur-2xl" />
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-2xl" />
                    
                    {/* Content */}
                    <div className="relative p-6">
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center hover:bg-white/80 transition-colors z-10"
                        >
                            <X className="w-4 h-4 text-foreground" />
                        </button>

                        {/* Header */}
                        <div className="text-center mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/25">
                                <Calendar className="w-7 h-7 text-white" />
                            </div>
                            <DialogTitle className="text-xl font-bold text-foreground mb-1">
                                Book a Session
                            </DialogTitle>
                            <DialogDescription className="text-sm text-muted-foreground">
                                Fill in your details and we'll get back to you
                            </DialogDescription>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Package Selection */}
                            <div className="space-y-1.5">
                                <Label htmlFor="package" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                                    <Sparkles className="w-3 h-3 text-primary" />
                                    Package
                                </Label>
                                <Select onValueChange={handlePackageChange} required>
                                    <SelectTrigger className="h-11 rounded-xl bg-white/50 backdrop-blur-sm border border-border/50 focus:ring-primary focus:ring-offset-0">
                                        <SelectValue placeholder="Select package" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl">
                                        <SelectItem value="basic">Basic (Hand OR Foot)</SelectItem>
                                        <SelectItem value="standard">Standard (Hand AND Foot)</SelectItem>
                                        <SelectItem value="premium">Premium (Family / Sibling)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Name */}
                            <div className="space-y-1.5">
                                <Label htmlFor="name" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                                    <User className="w-3 h-3 text-primary" />
                                    Your Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="h-11 rounded-xl bg-white/50 backdrop-blur-sm border border-border/50 focus:ring-primary focus:ring-offset-0"
                                />
                            </div>

                            {/* Contact */}
                            <div className="space-y-1.5">
                                <Label htmlFor="contact" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                                    <Phone className="w-3 h-3 text-primary" />
                                    Contact Number
                                </Label>
                                <Input
                                    id="contact"
                                    name="contact"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                    className="h-11 rounded-xl bg-white/50 backdrop-blur-sm border border-border/50 focus:ring-primary focus:ring-offset-0"
                                />
                            </div>

                            {/* Address */}
                            <div className="space-y-1.5">
                                <Label htmlFor="address" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                                    <MapPin className="w-3 h-3 text-primary" />
                                    Address
                                </Label>
                                <Textarea
                                    id="address"
                                    name="address"
                                    placeholder="Enter your complete address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="rounded-xl bg-white/50 backdrop-blur-sm border border-border/50 focus:ring-primary focus:ring-offset-0 min-h-[80px] resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <Button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="w-full h-12 rounded-xl bg-gradient-to-r from-primary via-purple-500 to-accent text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all mt-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Request
                                        <Sparkles className="w-4 h-4" />
                                    </>
                                )}
                            </Button>

                            <p className="text-[11px] text-center text-muted-foreground">
                                We'll contact you within 24 hours to confirm
                            </p>
                        </form>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;
