import React, { useState, useMemo } from 'react';
import Navbar, { categories } from './components/Navbar';
import StoryBar from './components/StoryBar';
import ArtisanBanner from './components/ArtisanBanner';
import FilterBar from './components/FilterBar';
import MasonryGrid from './components/MasonryGrid';
import GIClusters from './components/GIClusters';
import Footer from './components/Footer';
import ProductDetailDrawer from './components/ProductDetailDrawer';
import ArtisanListingModal from './components/ArtisanListingModal';
import { initialProducts, initialStories, giClusters } from './data/mockData';

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [stories, setStories] = useState(initialStories);
  const [selectedCategory, setSelectedCategory] = useState('All Crafts (142)');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Discover');

  // Modal & Selection States
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isListingModalOpen, setIsListingModalOpen] = useState(false);
  const [savedProductIds, setSavedProductIds] = useState(['prod-1']);
  const [cartCount, setCartCount] = useState(2);
  const [orderSuccessData, setOrderSuccessData] = useState(null);

  // Filter & Search Logic
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Transparency card & Reel card always display in Discover tab
      if (item.isTransparencyCard || item.isReel) return true;

      // Category matching
      let matchCat = true;
      if (selectedCategory === '✨ GI Certified Only') {
        matchCat = item.giTag?.includes('GI');
      } else if (selectedCategory === 'Under ₹2,000') {
        matchCat = (item.price || 0) <= 2000;
      } else if (selectedCategory !== 'All Crafts (142)') {
        matchCat = item.category?.toLowerCase() === selectedCategory.toLowerCase();
      }

      // Search matching
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title?.toLowerCase().includes(q) ||
        item.category?.toLowerCase().includes(q) ||
        item.artisanName?.toLowerCase().includes(q) ||
        item.village?.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  // Save / Bookmark Toggle
  const handleToggleSave = (productId) => {
    setSavedProductIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Quick Direct Buy Trigger
  const handleQuickBuy = (product) => {
    setSelectedProduct(product);
  };

  // Prepend dynamically from seller form
  const handleAddNewProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  // Order Placement
  const handlePlaceOrder = (details) => {
    setCartCount((c) => c + 1);
    setOrderSuccessData(details);
  };

  return (
    <div className="min-h-screen bg-[#141312] text-[#f5f1eb] antialiased flex flex-col font-sans selection:bg-[#9f3c16] selection:text-white">
      {/* 1. TOP APP BAR */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenListingModal={() => setIsListingModalOpen(true)}
        cartCount={cartCount}
        savedCount={savedProductIds.length}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* 2. MAIN VIEWPORT CONTENT */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 lg:px-14 py-6 flex flex-col gap-8 bg-[#141312]">
        
        {/* Story Highlight Bubbles (Instagram style) */}
        <StoryBar stories={stories} />

        {/* Quick Artisan Empowerment Selling Banner */}
        <ArtisanBanner onOpenListingModal={() => setIsListingModalOpen(true)} />

        {/* Sticky Filter Chips & Taxonomy Bar */}
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Pinterest + Instagram Hybrid Masonry Discovery Grid */}
        <MasonryGrid
          products={filteredProducts}
          onSelectProduct={(p) => setSelectedProduct(p)}
          savedProductIds={savedProductIds}
          onToggleSave={handleToggleSave}
          onQuickBuy={handleQuickBuy}
        />

        {/* Interactive Regional GI Explorer & Map Strip */}
        <GIClusters clusters={giClusters} />

      </main>

      {/* 3. FOOTER */}
      <Footer />

      {/* Product Detail & Provenance Drawer */}
      <ProductDetailDrawer
        product={selectedProduct}
        onClose={() => {
          setSelectedProduct(null);
          setOrderSuccessData(null);
        }}
        isSaved={selectedProduct ? savedProductIds.includes(selectedProduct.id) : false}
        onToggleSave={handleToggleSave}
        onPlaceOrder={handlePlaceOrder}
        orderSuccess={orderSuccessData}
        onResetOrderSuccess={() => setOrderSuccessData(null)}
      />

      {/* 60-Second Artisan Listing Modal */}
      <ArtisanListingModal
        isOpen={isListingModalOpen}
        onClose={() => setIsListingModalOpen(false)}
        onAddNewProduct={handleAddNewProduct}
      />
    </div>
  );
}
