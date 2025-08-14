
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { FileText, Upload } from "lucide-react";

const evidenceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  evidenceType: z.string().min(1, "Evidence type is required"),
  source: z.string().min(1, "Source is required"),
  relevance: z.string().min(1, "Relevance is required"),
});

type EvidenceFormData = z.infer<typeof evidenceSchema>;

interface EvidenceFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  investigationId: string;
}

export const EvidenceForm = ({ open, onOpenChange, investigationId }: EvidenceFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<EvidenceFormData>({
    resolver: zodResolver(evidenceSchema),
    defaultValues: {
      title: "",
      description: "",
      evidenceType: "",
      source: "",
      relevance: "",
    },
  });

  const onSubmit = async (data: EvidenceFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Evidence submitted:", { ...data, investigationId });
      
      toast({
        title: "Evidence Added",
        description: "Evidence has been successfully added to the investigation.",
      });
      
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add evidence. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-surveillance-panel border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground flex items-center">
            <FileText className="h-5 w-5 mr-2 text-primary" />
            Add Evidence - {investigationId}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Add new evidence to support this investigation. All fields are required.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Evidence Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Suspicious trading pattern analysis"
                      className="bg-muted/20 border-border text-foreground"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="evidenceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Evidence Type</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Trade Data, Communication Log, Market Analysis"
                      className="bg-muted/20 border-border text-foreground"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="source"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Source</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Trading System, Email Server, Market Data Feed"
                      className="bg-muted/20 border-border text-foreground"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="relevance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Relevance to Investigation</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Supports front-running allegations, Shows timing correlation"
                      className="bg-muted/20 border-border text-foreground"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Detailed Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide a detailed description of the evidence, including key findings, timestamps, and any relevant context..."
                      className="bg-muted/20 border-border text-foreground min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="border border-border rounded-lg p-4 bg-muted/5">
              <Label className="text-sm font-medium text-foreground mb-2 block">
                File Attachments (Optional)
              </Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Drag and drop files here, or click to browse
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Supports: PDF, DOC, XLS, PNG, JPG (Max 10MB)
                </p>
              </div>
            </div>

            <DialogFooter className="pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="bg-muted/20 hover:bg-muted/40"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? "Adding Evidence..." : "Add Evidence"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
