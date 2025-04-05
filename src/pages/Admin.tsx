
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import AdminEditForm from '@/components/AdminEditForm';
import AdminLogin from '@/components/AdminLogin';

// In a real app, this would be handled securely on the backend
// This is just for demo purposes
const ADMIN_PASSWORD = 'deva12345';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const handleLogin = (password: string) => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: 'Login successful',
        description: 'Welcome to the admin dashboard',
      });
    } else {
      toast({
        title: 'Login failed',
        description: 'Incorrect password',
        variant: 'destructive',
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Deva International</title>
      </Helmet>
      
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="container max-w-6xl mx-auto px-4">
          {!isAuthenticated ? (
            <AdminLogin onLogin={handleLogin} />
          ) : (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-serif font-medium text-leather-dark">Admin Dashboard</h1>
                  <p className="text-leather-dark/70 mt-1">Manage website content</p>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setIsAuthenticated(false)}
                >
                  Logout
                </Button>
              </div>
              
              <Tabs defaultValue="about" className="w-full">
                <TabsList className="mb-8 flex flex-wrap">
                  <TabsTrigger value="about">About Pages</TabsTrigger>
                  <TabsTrigger value="products">Products</TabsTrigger>
                  <TabsTrigger value="quality">Quality & Manufacturing</TabsTrigger>
                  <TabsTrigger value="images">Image Management</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <AdminEditForm
                        title="Who We Are"
                        fields={[
                          { id: 'hero-title', label: 'Hero Title', type: 'text', defaultValue: 'Who We Are' },
                          { id: 'hero-description', label: 'Hero Description', type: 'textarea', defaultValue: 'Our journey in leather craftsmanship.' },
                          { id: 'main-content', label: 'Main Content', type: 'rich-text', defaultValue: '<p>Content about who we are...</p>' }
                        ]}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <AdminEditForm
                        title="From The Founder"
                        fields={[
                          { id: 'founder-name', label: 'Founder Name', type: 'text', defaultValue: 'John Smith' },
                          { id: 'founder-message', label: 'Founder Message', type: 'textarea', defaultValue: 'Message from the founder...' },
                        ]}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="products" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <AdminEditForm
                        title="Premium Handbags"
                        fields={[
                          { id: 'handbags-title', label: 'Section Title', type: 'text', defaultValue: 'Premium Handbags' },
                          { id: 'handbags-description', label: 'Description', type: 'textarea', defaultValue: 'Our exquisite collection of premium handbags.' },
                          { id: 'catalog-link', label: 'Catalog Link', type: 'text', defaultValue: 'https://www.docsend.com/catalog-link' },
                        ]}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <AdminEditForm
                        title="Leather Wallets"
                        fields={[
                          { id: 'wallets-title', label: 'Section Title', type: 'text', defaultValue: 'Leather Wallets' },
                          { id: 'wallets-description', label: 'Description', type: 'textarea', defaultValue: 'Our handcrafted collection of leather wallets.' },
                          { id: 'catalog-link', label: 'Catalog Link', type: 'text', defaultValue: 'https://www.docsend.com/catalog-link' },
                        ]}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="quality" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <AdminEditForm
                        title="Quality Control"
                        fields={[
                          { id: 'quality-title', label: 'Section Title', type: 'text', defaultValue: 'Quality Control' },
                          { id: 'quality-description', label: 'Description', type: 'textarea', defaultValue: 'Our rigorous quality control process.' },
                          { id: 'quality-content', label: 'Detailed Content', type: 'rich-text', defaultValue: '<p>Details about our quality control...</p>' },
                        ]}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="images" className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-medium mb-4">Image Management</h3>
                      <p className="text-leather-dark/70 mb-4">Upload and manage website images</p>
                      
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <p className="text-sm text-gray-500 mb-4">Drag and drop images here, or click to browse</p>
                        <Button variant="outline">Upload Images</Button>
                        <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 10MB</p>
                      </div>
                      
                      <div className="mt-8">
                        <h4 className="font-medium mb-4">Recent Uploads</h4>
                        <p className="text-sm text-gray-500">No images uploaded yet.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
