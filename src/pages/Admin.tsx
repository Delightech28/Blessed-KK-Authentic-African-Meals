import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  Plus,
  Trash2,
  Upload,
  LogOut,
  Pencil,
  X,
  ImagePlus,
} from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useProducts } from "@/hooks/useProducts";
import {
  categories,
  formatPrice,
  ProductCategory,
  Product,
} from "@/data/products";

const ADMIN_CODE = "12345";
const AUTH_KEY = "blessedkk_admin_auth";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const { toast } = useToast();
  const { customProducts, addProduct, updateProduct, deleteProduct } =
    useProducts();

  // Form state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<ProductCategory>("Cakes");
  const [imageData, setImageData] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Edit modal state
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editCategory, setEditCategory] = useState<ProductCategory>("Cakes");
  const [editImageData, setEditImageData] = useState("");
  const [editImagePreview, setEditImagePreview] = useState("");
  const editFileInputRef = useRef<HTMLInputElement>(null);

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

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: (data: string) => void,
    setPreview: (preview: string) => void,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 2MB",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result as string;
      setData(base64);
      setPreview(base64);
    };
    reader.readAsDataURL(file);
  };

  const resetForm = () => {
    setName("");
    setPrice("");
    setDescription("");
    setImageData("");
    setImagePreview("");
    setCategory("Cakes");
    if (fileInputRef.current) fileInputRef.current.value = "";
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
      image: imageData || "/placeholder.svg",
    });

    toast({
      title: "Product added!",
      description: `${name} has been added to the menu.`,
    });

    resetForm();
  };

  const openEditModal = (product: Product) => {
    setEditingProduct(product);
    setEditName(product.name);
    setEditPrice(product.price.toString());
    setEditDescription(product.description);
    setEditCategory(product.category);
    setEditImageData(product.image);
    setEditImagePreview(product.image);
  };

  const closeEditModal = () => {
    setEditingProduct(null);
    setEditName("");
    setEditPrice("");
    setEditDescription("");
    setEditImageData("");
    setEditImagePreview("");
    if (editFileInputRef.current) editFileInputRef.current.value = "";
  };

  const handleUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    if (!editName || !editPrice || !editDescription || !editCategory) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const priceNum = parseFloat(editPrice);
    if (isNaN(priceNum) || priceNum <= 0) {
      toast({
        title: "Invalid price",
        description: "Please enter a valid price",
        variant: "destructive",
      });
      return;
    }

    updateProduct(editingProduct.id, {
      name: editName,
      price: priceNum,
      description: editDescription,
      category: editCategory,
      image: editImageData || "/placeholder.svg",
    });

    toast({
      title: "Product updated!",
      description: `${editName} has been updated.`,
    });

    closeEditModal();
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
                      onValueChange={(val) =>
                        setCategory(val as ProductCategory)
                      }
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
                    <Label className="font-body">Product Image</Label>
                    <div className="mt-1 space-y-3">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleImageUpload(e, setImageData, setImagePreview)
                        }
                        className="hidden"
                        id="image-upload"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full"
                      >
                        <ImagePlus className="w-4 h-4 mr-2" />
                        {imagePreview ? "Change Image" : "Upload Image"}
                      </Button>
                      {imagePreview && (
                        <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setImageData("");
                              setImagePreview("");
                              if (fileInputRef.current)
                                fileInputRef.current.value = "";
                            }}
                            className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground font-body">
                        Max file size: 2MB. Supported: JPG, PNG, WebP
                      </p>
                    </div>
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
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => openEditModal(product)}
                          >
                            <Pencil className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() =>
                              handleDelete(product.id, product.name)
                            }
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
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

      {/* Edit Product Modal */}
      <Dialog open={!!editingProduct} onOpenChange={() => closeEditModal()}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading">Edit Product</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleUpdateProduct} className="space-y-4">
            <div>
              <Label htmlFor="edit-name" className="font-body">
                Product Name *
              </Label>
              <Input
                id="edit-name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="e.g., Chocolate Croissant"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="edit-price" className="font-body">
                Price (₦) *
              </Label>
              <Input
                id="edit-price"
                type="number"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                placeholder="e.g., 1500"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="edit-category" className="font-body">
                Category *
              </Label>
              <Select
                value={editCategory}
                onValueChange={(val) => setEditCategory(val as ProductCategory)}
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
              <Label htmlFor="edit-description" className="font-body">
                Description *
              </Label>
              <Textarea
                id="edit-description"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                placeholder="Describe your product..."
                className="mt-1"
                rows={3}
              />
            </div>

            <div>
              <Label className="font-body">Product Image</Label>
              <div className="mt-1 space-y-3">
                <input
                  ref={editFileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleImageUpload(e, setEditImageData, setEditImagePreview)
                  }
                  className="hidden"
                  id="edit-image-upload"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => editFileInputRef.current?.click()}
                  className="w-full"
                >
                  <ImagePlus className="w-4 h-4 mr-2" />
                  Change Image
                </Button>
                {editImagePreview && (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                    <img
                      src={editImagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={closeEditModal}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button type="submit" variant="cta" className="flex-1">
                Save Changes
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
