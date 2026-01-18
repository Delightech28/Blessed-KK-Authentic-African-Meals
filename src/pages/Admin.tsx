import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lock, Plus, Trash2, Upload, LogOut } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
import { useToast } from "@/hooks/use-toast";
import { useProducts } from "@/hooks/useProducts";
import { categories, formatPrice, ProductCategory } from "@/data/products";

const ADMIN_CODE = "12345";
const AUTH_KEY = "sweetcrust_admin_auth";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();
  const { customProducts, addProduct, deleteProduct } = useProducts();

  // Form state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<ProductCategory>("Cakes");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const auth = sessionStorage.getItem(AUTH_KEY);
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === ADMIN_CODE) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_KEY, "true");
      setError("");
    } else {
      setError("Invalid admin code");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_KEY);
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !price || !description || !category) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const priceNum = parseFloat(price);
    if (isNaN(priceNum) || priceNum <= 0) {
      toast({
        title: "Invalid price",
        description: "Please enter a valid price",
        variant: "destructive",
      });
      return;
    }

    addProduct({
      name,
      price: priceNum,
      description,
      category,
      image: imageUrl || "/placeholder.svg",
    });

    toast({
      title: "Product added!",
      description: `${name} has been added to the menu.`,
    });

    // Reset form
    setName("");
    setPrice("");
    setDescription("");
    setImageUrl("");
    setCategory("Cakes");
  };

  const handleDelete = (id: string, productName: string) => {
    deleteProduct(id);
    toast({
      title: "Product deleted",
      description: `${productName} has been removed from the menu.`,
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 md:pt-28 min-h-[70vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md mx-4"
          >
            <div className="bakery-card p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h1 className="font-heading text-2xl font-bold text-foreground">
                  Admin Access
                </h1>
                <p className="font-body text-muted-foreground mt-2">
                  Enter the admin code to continue
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="code" className="font-body">
                    Admin Code
                  </Label>
                  <Input
                    id="code"
                    type="password"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter admin code"
                    className="mt-1"
                  />
                  {error && (
                    <p className="text-destructive text-sm mt-1 font-body">
                      {error}
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full" variant="cta">
                  Access Admin Panel
                </Button>
              </form>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 md:pt-28">
        {/* Header */}
        <section className="bg-card py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-heading font-bold text-foreground"
                >
                  Admin Panel
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-body text-muted-foreground mt-2"
                >
                  Add and manage your pastry products
                </motion.p>
              </div>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </Button>
            </div>
          </div>
        </section>

        <section className="bakery-section">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Add Product Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bakery-card p-6"
              >
                <h2 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-primary" />
                  Add New Product
                </h2>

                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="font-body">
                      Product Name *
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Chocolate Croissant"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="price" className="font-body">
                      Price (₦) *
                    </Label>
                    <Input
                      id="price"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="e.g., 1500"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="category" className="font-body">
                      Category *
                    </Label>
                    <Select
                      value={category}
                      onValueChange={(val) => setCategory(val as ProductCategory)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description" className="font-body">
                      Description *
                    </Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe your product..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="imageUrl" className="font-body">
                      Image URL (optional)
                    </Label>
                    <Input
                      id="imageUrl"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="mt-1"
                    />
                    <p className="text-xs text-muted-foreground mt-1 font-body">
                      Leave empty to use placeholder image
                    </p>
                  </div>

                  <Button type="submit" variant="cta" className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Add Product
                  </Button>
                </form>
              </motion.div>

              {/* Custom Products List */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Your Custom Products ({customProducts.length})
                </h2>

                {customProducts.length === 0 ? (
                  <div className="bakery-card p-8 text-center">
                    <p className="font-body text-muted-foreground">
                      No custom products added yet. Add your first product using
                      the form!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {customProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bakery-card p-4 flex items-center gap-4"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading font-semibold text-foreground truncate">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground font-body">
                            {product.category} • {formatPrice(product.price)}
                          </p>
                        </div>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDelete(product.id, product.name)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
