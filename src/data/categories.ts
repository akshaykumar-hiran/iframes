export const categories: Record<string, { slides: any[]; products: any[] }> = {
  devotional: {
    slides: [
      {
        id: 1,
        title: "Divine Frames Collection",
        subtitle: "Bring Spirituality To Your Home",
        description: "Exclusive devotional frames for your temple and home.",
        image: "/devotional1.png",
      },
    ],
    products: [
      {
        id: 1,
        title: "Krishna Frame",
        price: "$42.00",
        oldPrice: "$65.00",
        image: "/krishna.png",
      },
      {
        id: 2,
        title: "Shiv Parvati Frame",
        price: "$58.00",
        oldPrice: "$80.00",
        image: "/shiv.png",
      },
    ],
  },

  lifestyle: {
    slides: [
      {
        id: 1,
        title: "Modern Living Frames",
        subtitle: "Trendy Designs",
        description: "Minimalist frames to style your walls beautifully.",
        image: "/modern1.png",
      },
    ],
    products: [
      {
        id: 1,
        title: "Abstract Wall Frame",
        price: "$39.00",
        oldPrice: "$55.00",
        image: "/abstract.png",
      },
      {
        id: 2,
        title: "Geometric Frame",
        price: "$49.00",
        oldPrice: "$70.00",
        image: "/geometric.png",
      },
    ],
  },


  home: {
    slides: [
      {
        id: 1,
        title: "Decorate Your Home",
        subtitle: "Beautiful Frames for Every Room",
        description: "Find premium frames for your living room, bedroom, and workspace.",
        image: "/home1.png",
      },
      {
        id: 2,
        title: "Cozy Wall Decor",
        subtitle: "Make Your House a Home",
        description: "Warm & stylish designs perfect for family spaces.",
        image: "/home2.png",
      },
    ],
    products: [
      {
        id: 1,
        title: "Living Room Frame",
        price: "$35.00",
        oldPrice: "$50.00",
        image: "/livingroom.png",
      },
      {
        id: 2,
        title: "Bedroom Frame",
        price: "$45.00",
        oldPrice: "$65.00",
        image: "/bedroom.png",
      },
      {
        id: 3,
        title: "Workspace Frame",
        price: "$40.00",
        oldPrice: "$60.00",
        image: "/workspace.png",
      },
    ],
  },
};
