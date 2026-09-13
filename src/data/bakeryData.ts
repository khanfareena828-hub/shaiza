import { Product, CategoryInfo, WishingCardTemplate, Review } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'Cakes',
    name: 'Cakes',
    icon: '🎂',
    description: 'Fluffy sponge, silky ganache & artisanal decorations made for magical celebrations.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    itemCount: '12 Flavors'
  },
  {
    id: 'Cupcakes',
    name: 'Cupcakes',
    icon: '🧁',
    description: 'Bite-sized cloud cakes topped with swirls of dreamy Swiss buttercream & pearls.',
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=600&q=80',
    itemCount: '8 Flavors'
  },
  {
    id: 'Cookies',
    name: 'Cookies',
    icon: '🍪',
    description: 'Golden edges, chewy centres, and loaded with rich Belgian chocolate chunks.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80',
    itemCount: '6 Varieties'
  },
  {
    id: 'Pastries',
    name: 'Pastries',
    icon: '🥐',
    description: 'Flaky golden French croissants, fruity danishes, and layered puff delights.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    itemCount: '10 Specialties'
  },
  {
    id: 'Donuts',
    name: 'Donuts',
    icon: '🍩',
    description: 'Brioche dough glazed with strawberry sugar, white chocolate, and sprinkles.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80',
    itemCount: '7 Styles'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Strawberry Cupcake',
    category: 'Cupcakes',
    price: 149,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=700&q=80',
    description: 'Tender vanilla sponge piped with fresh farm strawberry buttercream and a ruby glaze heart.',
    isEggless: true,
    badge: 'Popular ♡',
    prepTime: 'Fresh Today'
  },
  {
    id: 'prod-2',
    name: 'Vanilla Cupcake',
    category: 'Cupcakes',
    price: 129,
    rating: 4.8,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=700&q=80',
    description: 'Classic Madagascar bourbon vanilla bean crumb topped with light whipped frosting & pastel sprinkles.',
    isEggless: false,
    badge: 'Classic',
    prepTime: 'Fresh Today'
  },
  {
    id: 'prod-3',
    name: 'Chocolate Cake',
    category: 'Cakes',
    price: 699,
    rating: 5.0,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
    description: 'Decadent 3-layer dark Dutch cocoa cake slathered in silky Belgian chocolate truffle ganache.',
    isEggless: true,
    badge: 'Best Seller ★',
    prepTime: '1 hr prep'
  },
  {
    id: 'prod-4',
    name: 'Red Velvet Cake',
    category: 'Cakes',
    price: 799,
    rating: 4.9,
    reviewsCount: 184,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=700&q=80',
    description: 'Velvety crimson sponge paired with tangy whipped cream cheese frosting and edible rose dust.',
    isEggless: true,
    badge: 'Romantic Choice',
    prepTime: '1 hr prep'
  },
  {
    id: 'prod-5',
    name: 'Chocolate Chip Cookies',
    category: 'Cookies',
    price: 199,
    rating: 4.9,
    reviewsCount: 160,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80',
    description: 'Pack of 4 oversized chewy butter cookies baked with melted 54% dark chocolate chips and sea salt.',
    isEggless: true,
    badge: 'Chewy & Crisp',
    prepTime: 'Ready to munch'
  },
  {
    id: 'prod-6',
    name: 'Blueberry Muffin',
    category: 'Muffins',
    price: 149,
    rating: 4.7,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=700&q=80',
    description: 'Plump organic blueberries folded into a tender cinnamon-spiced batter with brown sugar streusel top.',
    isEggless: false,
    badge: 'Morning Favorite',
    prepTime: 'Warm & Fresh'
  },
  {
    id: 'prod-7',
    name: 'Glazed Donut',
    category: 'Donuts',
    price: 99,
    rating: 4.8,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80',
    description: 'Airy brioche ring fried to golden perfection, dipped in a glossy strawberry vanilla milk glaze.',
    isEggless: true,
    badge: 'Sweet Treat',
    prepTime: 'Fresh Today'
  },
  {
    id: 'prod-8',
    name: 'Belgian Waffle',
    category: 'Waffles',
    price: 249,
    rating: 4.9,
    reviewsCount: 134,
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80',
    description: 'Crispy caramelized pearl sugar Belgian waffle served with fresh whipped cream, maple syrup & berries.',
    isEggless: true,
    badge: 'Warm & Crispy',
    prepTime: 'Made to order'
  },
  {
    id: 'prod-9',
    name: 'Raspberry Macaron Box',
    category: 'Pastries',
    price: 299,
    rating: 5.0,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=700&q=80',
    description: 'Box of 4 delicate pastel French almond macarons filled with tart raspberry compote and white ganache.',
    isEggless: false,
    badge: 'Gift Choice',
    prepTime: 'In Gift Box'
  },
  {
    id: 'prod-10',
    name: 'Butter Croissant',
    category: 'Pastries',
    price: 139,
    rating: 4.8,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80',
    description: 'Traditional 27-layer laminated French butter croissant with a crisp flaky shell and honeycomb crumb.',
    isEggless: false,
    badge: '100% Pure Butter',
    prepTime: 'Warm Daily'
  }
];

export const WISHING_CARDS: WishingCardTemplate[] = [
  {
    id: 'card-bday-1',
    title: 'Sweetest Birthday Wishes',
    category: 'Birthday',
    coverImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80',
    insideImage: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=600&q=80',
    bgColor: '#FFF0F5',
    accentColor: '#FF6B8B',
    textColor: '#5C2D3A',
    icon: '🎂',
    quoteSnippet: 'Wishing you a day filled with sweetness, happiness and beautiful moments! 🎂♡',
    defaultMessage: 'May your year ahead be as sweet and magical as this delicious cake! Happy Birthday with all my love! ♡',
    stickers: ['🎂', '🎈', '💖', '✨', '🧁', '🎀']
  },
  {
    id: 'card-anniv-1',
    title: 'Love & Sweet Memories',
    category: 'Anniversary',
    coverImage: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80',
    insideImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80',
    bgColor: '#FFF1F2',
    accentColor: '#E11D48',
    textColor: '#4C1D24',
    icon: '💕',
    quoteSnippet: 'Every day with you is as delightful as freshly baked sweetness. Happy Anniversary! ♡',
    defaultMessage: 'Celebrating the sweetest love story ever! Here is to a lifetime of shared desserts, warm hugs, and endless happiness.',
    stickers: ['💕', '💍', '🥂', '🌹', '🍓', '✨']
  },
  {
    id: 'card-thanks-1',
    title: 'A Little Sweet Thank You',
    category: 'Thank You',
    coverImage: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80',
    insideImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
    bgColor: '#FDF4FF',
    accentColor: '#C026D3',
    textColor: '#4A1D54',
    icon: '🌸',
    quoteSnippet: 'Just a sweet gesture to say thank you for everything you do! 🌸♡',
    defaultMessage: 'Your kindness warms my heart more than fresh oven cookies. Thank you so very much for being wonderful!',
    stickers: ['🌸', '💐', '💌', '🧁', '🌷', '🎀']
  },
  {
    id: 'card-congrats-1',
    title: 'Huge Sweet Congratulations',
    category: 'Congratulations',
    coverImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=600&q=80',
    insideImage: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80',
    bgColor: '#FEF3C7',
    accentColor: '#D97706',
    textColor: '#52340E',
    icon: '💗',
    quoteSnippet: 'You did it! Time to celebrate with lots of sugary joy and treats! 🎉♡',
    defaultMessage: 'So proud of your achievement! You worked so hard and deserve to celebrate with the sweetest treats in town.',
    stickers: ['🎉', '🏆', '⭐', '🥂', '🍰', '✨']
  },
  {
    id: 'card-getwell-1',
    title: 'Warm Hugs & Sweet Recovery',
    category: 'Get Well Soon',
    coverImage: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80',
    insideImage: 'https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&w=600&q=80',
    bgColor: '#F0FDF4',
    accentColor: '#16A34A',
    textColor: '#14532D',
    icon: '🌷',
    quoteSnippet: 'Sending healing love and sugary comfort to make you smile again! 🌷♡',
    defaultMessage: 'Sending you warm wishes, cozy hugs, and a basket of sweetness. Rest up and feel better very soon!',
    stickers: ['🌷', '🍵', '🧸', '🍯', '🌿', '💖']
  },
  {
    id: 'card-bestwishes-1',
    title: 'Sprinkled With Best Wishes',
    category: 'Best Wishes',
    coverImage: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&w=600&q=80',
    insideImage: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=600&q=80',
    bgColor: '#EFF6FF',
    accentColor: '#2563EB',
    textColor: '#1E3A8A',
    icon: '🎓',
    quoteSnippet: 'May all your dreams rise high and taste sweet like honey! 🎓✨',
    defaultMessage: 'Wishing you the very brightest success on your new journey! You are destined for marvelous things.',
    stickers: ['🎓', '🌟', '📚', '🚀', '🍰', '🎈']
  },
  {
    id: 'card-justforu-1',
    title: 'Just Because You are Sweet',
    category: 'Just For You',
    coverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    insideImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    bgColor: '#FFF7ED',
    accentColor: '#EA580C',
    textColor: '#5A2A18',
    icon: '❤️',
    quoteSnippet: 'No special reason needed — just wanted to treat someone so special! ❤️♡',
    defaultMessage: 'Thinking of you today and sending this little sweetness to brighten your day and remind you how loved you are!',
    stickers: ['❤️', '🍩', '🍪', '☕', '🍓', '🎀']
  },
  {
    id: 'card-celeb-1',
    title: 'Sweet Party Celebration',
    category: 'Celebration',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    insideImage: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80',
    bgColor: '#FAF5FF',
    accentColor: '#9333EA',
    textColor: '#491873',
    icon: '🎉',
    quoteSnippet: 'Let us turn every little milestone into a celebration of sweetness! 🎉♡',
    defaultMessage: 'Cheers to marvelous moments, laughter that makes your cheeks hurt, and the sweetest cake to share!',
    stickers: ['🎉', '🧁', '🎊', '✨', '🎂', '🥳']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Pooja Sharma',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 days ago',
    text: 'Ordered the Strawberry Cupcake and customized a Birthday wishing card for my sister. The packaging was adorable and the handwritten card inside made her tear up! The cake was super soft and melted in our mouths ♡',
    favoriteDessert: 'Strawberry Cupcake & Wishing Card'
  },
  {
    id: 'rev-2',
    name: 'Rohan Deshmukh',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Last week',
    text: 'Best bakery in Aurangabad! Ordered a custom 2-tier chocolate cake for an anniversary party. The eggless crumb was extraordinarily moist and the live price calculator made ordering so seamless. Highly recommended!',
    favoriteDessert: 'Custom Chocolate Truffle Cake'
  },
  {
    id: 'rev-3',
    name: 'Ananya Verma',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '3 days ago',
    text: 'The Red Velvet cake and glazed donuts are absolute heaven. The bakery has such a cute aesthetic, and the staff is so gentle and loving. Definitely my go-to sweet corner forever!',
    favoriteDessert: 'Red Velvet Cake & Glazed Donut'
  }
];

export const GALLERY_IMAGES = [
  {
    id: 'gal-1',
    title: 'Vintage Heart Bento Cake',
    tag: 'Bespoke Cakes',
    url: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80',
    likes: 348
  },
  {
    id: 'gal-2',
    title: 'Pastel Strawberry Tower',
    tag: 'Cupcakes',
    url: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=600&q=80',
    likes: 412
  },
  {
    id: 'gal-3',
    title: 'Melted Truffle Drip Cake',
    tag: 'Celebration',
    url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
    likes: 520
  },
  {
    id: 'gal-4',
    title: 'Freshly Glazed Berry Donuts',
    tag: 'Donuts',
    url: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80',
    likes: 290
  },
  {
    id: 'gal-5',
    title: 'Artisan French Macarons',
    tag: 'Pastries',
    url: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=600&q=80',
    likes: 385
  },
  {
    id: 'gal-6',
    title: 'Warm Belgian Waffles with Berries',
    tag: 'Breakfast Sweet',
    url: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
    likes: 467
  }
];

export const BAKERY_INFO = {
  name: 'Sweet Crumbs Bakery',
  tagline: 'Baked with Love, Served with Happiness ♡',
  address: 'TV Centre, Aurangabad, Maharashtra',
  phone: '7558239803',
  email: 'khanfareena828@gmail.com',
  hours: 'Mon - Sun: 9:00 AM - 10:30 PM',
  instagram: '@sweetcrumbsbakery',
  discountCode: 'SWEETLOVE20'
};
