
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Save } from 'lucide-react';

interface Field {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'rich-text' | 'image';
  defaultValue: string;
}

interface AdminEditFormProps {
  title: string;
  fields: Field[];
}

const AdminEditForm: React.FC<AdminEditFormProps> = ({ title, fields }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce((acc, field) => {
      acc[field.id] = field.defaultValue;
      return acc;
    }, {} as Record<string, string>)
  );

  const handleChange = (id: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would save to a database
    console.log('Form data to save:', formData);
    
    toast({
      title: "Changes saved",
      description: `Your changes to ${title} have been saved.`,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-xl font-medium mb-4">{title}</h3>
      
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.id} className="space-y-2">
            <label htmlFor={field.id} className="text-sm font-medium">
              {field.label}
            </label>
            
            {field.type === 'text' && (
              <Input
                id={field.id}
                value={formData[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
            )}
            
            {field.type === 'textarea' && (
              <Textarea
                id={field.id}
                value={formData[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                rows={4}
              />
            )}
            
            {field.type === 'rich-text' && (
              <Textarea
                id={field.id}
                value={formData[field.id]}
                onChange={(e) => handleChange(field.id, e.target.value)}
                rows={10}
                className="font-mono text-sm"
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <Button type="submit">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default AdminEditForm;
