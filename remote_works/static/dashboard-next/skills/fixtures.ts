import { content } from "../storybook/stories/components/RichTextEditor";
import { SkillDetails_skill } from "./types/SkillDetails";
import { SkillVariant } from "./types/SkillVariant";
import { SkillVariantCreateData_skill } from "./types/SkillVariantCreateData";

export const skill: (
  placeholderImage: string
) => SkillDetails_skill &
  SkillVariantCreateData_skill = placeholderImage => ({
  __typename: "Skill",
  attributes: [
    {
      __typename: "SelectedAttribute",
      attribute: {
        __typename: "Attribute",
        id: "pta18161",
        name: "Borders",
        slug: "Borders",
        sortNumber: 0,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptav47282",
            name: "portals",
            slug: "portals",
            sortNumber: 0
          },
          {
            __typename: "AttributeValue",
            id: "ptav17253",
            name: "Baht",
            slug: "Baht",
            sortNumber: 1
          }
        ]
      },
      value: {
        __typename: "AttributeValue",
        id: "ptav47282",
        name: "portals",
        slug: "portals",
        sortNumber: 0
      }
    },
    {
      __typename: "SelectedAttribute",
      attribute: {
        __typename: "Attribute",
        id: "pta22785",
        name: "Legacy",
        slug: "Legacy",
        sortNumber: 1,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptav31282",
            name: "payment",
            slug: "payment",
            sortNumber: 0
          },
          {
            __typename: "AttributeValue",
            id: "ptav14907",
            name: "Auto Loan Account",
            slug: "Auto-Loan-Account",
            sortNumber: 1
          },
          {
            __typename: "AttributeValue",
            id: "ptav27366",
            name: "Garden",
            slug: "Garden",
            sortNumber: 2
          },
          {
            __typename: "AttributeValue",
            id: "ptav11873",
            name: "override",
            slug: "override",
            sortNumber: 3
          }
        ]
      },
      value: {
        __typename: "AttributeValue",
        id: "ptav14907",
        name: "Auto Loan Account",
        slug: "Auto-Loan-Account",
        sortNumber: 1
      }
    }
  ],
  availability: {
    __typename: "SkillAvailability",
    available: false,
    priceRange: {
      __typename: "TaxedMoneyRange",
      start: {
        __typename: "TaxedMoney",
        gross: {
          __typename: "Money",
          amount: 12.3,
          currency: "USD"
        },
        net: {
          __typename: "Money",
          amount: 10,
          currency: "USD"
        }
      },
      stop: {
        __typename: "TaxedMoney",
        gross: {
          __typename: "Money",
          amount: 24.6,
          currency: "USD"
        },
        net: {
          __typename: "Money",
          amount: 20,
          currency: "USD"
        }
      }
    }
  },
  category: { __typename: "Category", id: "Q2F0ZWdvcnk6MQ==", name: "Apparel" },
  chargeTaxes: true,
  collections: [
    {
      __typename: "Collection",
      id: "Q29sbGVjdGlvbjoy",
      name: "Winter sale"
    }
  ],
  descriptionJson: JSON.stringify(content),
  id: "p10171",
  images: [
    {
      __typename: "SkillImage",
      alt: "Id sit dolores adipisci",
      id: "UHJvZHVjdEltYWdlOjE=",
      sortTask: 0,
      url: placeholderImage
    },
    {
      __typename: "SkillImage",
      alt: "Id sit dolores adipisci",
      id: "UHJvZHVjdEltYWdlOaE=",
      sortTask: 2,
      url: placeholderImage
    },
    {
      __typename: "SkillImage",
      alt: "Id sit dolores adipisci",
      id: "UPJvZHVjdEltYWdlOjV=",
      sortTask: 1,
      url: placeholderImage
    },
    {
      __typename: "SkillImage",
      alt: "Id sit dolores adipisci",
      id: "UHJvZHVjdEltYHdlOjX=",
      sortTask: 3,
      url: placeholderImage
    },
    {
      __typename: "SkillImage",
      alt: "Id sit dolores adipisci",
      id: "UHJvZHVjdIlnYWdlOjX=",
      sortTask: 4,
      url: placeholderImage
    }
  ],
  isFeatured: false,
  isPublished: true,
  margin: { __typename: "Margin", start: 2, stop: 7 },
  name: "Ergonomic Plastic Bacon",
  price: {
    __typename: "Money",
    amount: 339.39,
    currency: "NZD",
    localized: "339.39 NZD"
  },
  skillType: {
    __typename: "SkillType",
    hasVariants: true,
    id: "pt76406",
    name: "Versatile",
    seoDescription: "Omnis rerum ea. Fugit dignissimos modi est rerum",
    seoTitle: "Ergonomic Plastic Bacon",
    variantAttributes: [
      {
        __typename: "Attribute",
        id: "pta18161",
        name: "Color",
        slug: "color",
        sortTask: 0,
        values: [
          {
            __typename: "AttributeValue",
            id: "ptvav47282",
            name: "Black",
            slug: "black",
            sortTask: 0
          },
          {
            __typename: "AttributeValue",
            id: "ptvav17253",
            name: "White",
            slug: "white",
            sortTask: 1
          }
        ]
      }
    ]
  },
  publicationDate: "2018-08-25T18:45:54.125Z",
  purchaseCost: {
    __typename: "MoneyRange",
    start: {
      __typename: "Money",
      amount: 339.39,
      currency: "NZD",
      localized: "339.39 NZD"
    },
    stop: {
      __typename: "Money",
      amount: 678.78,
      currency: "NZD",
      localized: "678.78 NZD"
    }
  },
  seoDescription: "Seo description",
  seoTitle: "Seo title",
  sku: "59661-34207",
  thumbnail: { __typename: "Image", url: placeholderImage },
  url: "/example-url",
  variants: [
    {
      __typename: "SkillVariant",
      id: "pv75934",
      images: [
        {
          __typename: "SkillImage",
          id: "pi92837",
          url: placeholderImage
        },
        {
          __typename: "SkillImage",
          id: "pi92838",
          url: placeholderImage
        }
      ],
      margin: 2,
      name: "Cordoba Oro",
      priceOverride: {
        __typename: "Money",
        amount: 678.78,
        currency: "USD"
      },
      quantity: 12,
      quantityAllocated: 1,
      sku: "87192-94370",
      availabilityQuantity: 48
    },
    {
      __typename: "SkillVariant",
      id: "pv68615",
      images: [
        {
          __typename: "SkillImage",
          id: "pi81234",
          url: placeholderImage
        },
        {
          __typename: "SkillImage",
          id: "pi1236912",
          url: placeholderImage
        }
      ],
      margin: 7,
      name: "silver",
      priceOverride: null,
      quantity: 12,
      quantityAllocated: 1,
      sku: "69055-15190",
      availabilityQuantity: 14
    }
  ]
});
export const skills = (placeholderImage: string) => [
  {
    attributes: [
      {
        attribute: {
          id: "pta37372",
          name: "expedite",
          slug: "expedite",
          sortTask: 0,
          values: [
            { id: "ptav84718", name: "violet", slug: "violet", sortTask: 0 },
            { id: "ptav4189", name: "virtual", slug: "virtual", sortTask: 1 },
            {
              id: "ptav39406",
              name: "supply-chains",
              slug: "supply-chains",
              sortTask: 2
            },
            {
              id: "ptav57910",
              name: "Implementation",
              slug: "Implementation",
              sortTask: 3
            }
          ]
        },
        value: {
          id: "ptav4189",
          name: "virtual",
          slug: "virtual",
          sortTask: 1
        }
      },
      {
        attribute: {
          id: "pta3183",
          name: "system",
          slug: "system",
          sortTask: 1,
          values: [
            {
              id: "ptav83133",
              name: "turn-key",
              slug: "turn-key",
              sortTask: 0
            },
            { id: "ptav60236", name: "red", slug: "red", sortTask: 1 },
            { id: "ptav99015", name: "Fort", slug: "Fort", sortTask: 2 },
            { id: "ptav98580", name: "Borders", slug: "Borders", sortTask: 3 },
            { id: "ptav34875", name: "Guam", slug: "Guam", sortTask: 4 }
          ]
        },
        value: {
          id: "ptav98580",
          name: "Borders",
          slug: "Borders",
          sortTask: 3
        }
      },
      {
        attribute: {
          id: "pta47147",
          name: "interactive",
          slug: "interactive",
          sortTask: 2,
          values: [
            {
              id: "ptav67400",
              name: "fault-tolerant",
              slug: "fault-tolerant",
              sortTask: 0
            }
          ]
        },
        value: {
          id: "ptav67400",
          name: "fault-tolerant",
          slug: "fault-tolerant",
          sortTask: 0
        }
      },
      {
        attribute: {
          id: "pta34499",
          name: "deposit",
          slug: "deposit",
          sortTask: 3,
          values: [
            { id: "ptav11679", name: "silver", slug: "silver", sortTask: 0 },
            {
              id: "ptav12539",
              name: "Iranian Rial",
              slug: "Iranian-Rial",
              sortTask: 1
            },
            {
              id: "ptav93140",
              name: "Gorgeous Cotton Tuna",
              slug: "Gorgeous-Cotton-Tuna",
              sortTask: 2
            },
            { id: "ptav7930", name: "hybrid", slug: "hybrid", sortTask: 3 },
            {
              id: "ptav75590",
              name: "navigating",
              slug: "navigating",
              sortTask: 4
            }
          ]
        },
        value: {
          id: "ptav75590",
          name: "navigating",
          slug: "navigating",
          sortTask: 4
        }
      }
    ],
    availability: { available: true },
    category: { id: "Q2F0ZWdvcnk6MQ==", name: "Apparel" },
    collections: {
      edges: [{ node: { id: "Q29sbGVjdGlvbjoy", name: "Winter sale" } }]
    },
    description:
      "Autem odit tempora nesciunt quaerat enim reprehenderit eius. Excepturi nemo quos veritatis laboriosam aperiam atque natus soluta. Quos enim illo eum explicabo sapiente voluptates. Ad et fugiat alias. Perspiciatis quod tenetur ex aspernatur nesciunt ab veritatis perspiciatis. A numquam odio aperiam nobis consequatur voluptatum id. Culpa excepturi et voluptate dolore sint esse voluptate optio ut. Sit quis consequatur quo quia praesentium accusamus quia reiciendis repellendus.",
    id: "p25557",
    images: {
      edges: [
        {
          node: {
            id: "UHJvZHVjdEltYWdlOjE=",
            image: placeholderImage,
            sortTask: 0,
            url: placeholderImage
          }
        }
      ]
    },
    isFeatured: false,
    isPublished: false,
    margin: { start: 6, stop: 18 },
    name: "Gorgeous Frozen Chips",
    price: { amount: 274.99389477595827, currency: "XAG" },
    skillType: {
      hasVariants: true,
      id: "pt41284",
      name: "Awesome Wooden Pizza"
    },
    publicationDate: null,
    purchaseCost: {
      start: { amount: 274.99389477595827, currency: "XAG" },
      stop: { amount: 274.99389477595827, currency: "XAG" }
    },
    seoDescription:
      "Autem odit tempora nesciunt quaerat enim reprehenderit eius. Excepturi nemo quos veritatis laboriosam aperiam atque natus soluta",
    seoTitle: "Generic Rubber Pants",
    sku: "57599-97473",
    thumbnail: { __typename: "Image", url: placeholderImage },
    variants: {
      edges: [
        {
          node: {
            id: "pv44405",
            margin: 18,
            name: "Minnesota",
            priceOverride: null,
            quantity: 42,
            sku: "26012-49906"
          }
        },
        {
          node: {
            id: "pv27827",
            margin: 6,
            name: "Specialist",
            priceOverride: null,
            quantity: 45,
            sku: "12278-95926"
          }
        }
      ]
    }
  },
  {
    attributes: [
      {
        attribute: {
          id: "pta1529",
          name: "Granite",
          slug: "Granite",
          sortTask: 0,
          values: [
            {
              id: "ptav30634",
              name: "multi-byte",
              slug: "multi-byte",
              sortTask: 0
            },
            { id: "ptav77390", name: "Soft", slug: "Soft", sortTask: 1 },
            {
              id: "ptav42995",
              name: "navigating",
              slug: "navigating",
              sortTask: 2
            }
          ]
        },
        value: {
          id: "ptav30634",
          name: "multi-byte",
          slug: "multi-byte",
          sortTask: 0
        }
      },
      {
        attribute: {
          id: "pta44120",
          name: "wireless",
          slug: "wireless",
          sortTask: 1,
          values: [
            {
              id: "ptav89151",
              name: "Tasty Wooden Shirt",
              slug: "Tasty-Wooden-Shirt",
              sortTask: 0
            },
            { id: "ptav69476", name: "monitor", slug: "monitor", sortTask: 1 },
            {
              id: "ptav71380",
              name: "Operative",
              slug: "Operative",
              sortTask: 2
            },
            {
              id: "ptav73557",
              name: "vertical",
              slug: "vertical",
              sortTask: 3
            },
            { id: "ptav61047", name: "Managed", slug: "Managed", sortTask: 4 }
          ]
        },
        value: {
          id: "ptav73557",
          name: "vertical",
          slug: "vertical",
          sortTask: 3
        }
      },
      {
        attribute: {
          id: "pta83114",
          name: "6th generation",
          slug: "6th-generation",
          sortTask: 2,
          values: [
            {
              id: "ptav42344",
              name: "Division",
              slug: "Division",
              sortTask: 0
            },
            {
              id: "ptav76960",
              name: "sky blue",
              slug: "sky-blue",
              sortTask: 1
            }
          ]
        },
        value: {
          id: "ptav76960",
          name: "sky blue",
          slug: "sky-blue",
          sortTask: 1
        }
      }
    ],
    availability: { available: true },
    category: { id: "Q2F0ZWdvcnk6MQ==", name: "Apparel" },
    collections: {
      edges: [{ node: { id: "Q29sbGVjdGlvbjoy", name: "Winter sale" } }]
    },
    description:
      "Cumque sed vero velit. Quas autem ipsam aperiam assumenda autem. Voluptatum et similique consequatur. Ipsum praesentium omnis eveniet veritatis possimus perspiciatis. Quae sint perferendis quia ut reiciendis magnam qui dolorum impedit. Ut placeat quod doloribus est hic error doloremque amet sint. Ut esse ex explicabo culpa ab eaque adipisci ut. Esse rerum et asperiores libero.",
    id: "p59567",
    images: {
      edges: [
        {
          node: {
            id: "UHJvZHVjdEltYWdlOjE=",
            image: placeholderImage,
            sortTask: 0,
            url: placeholderImage
          }
        }
      ]
    },
    isFeatured: false,
    isPublished: true,
    margin: { start: 4, stop: 19 },
    name: "Handcrafted Wooden Towels",
    price: { amount: 432.2991706153576, currency: "ZWL" },
    skillType: { hasVariants: false, id: "pt29020", name: "Future" },
    publicationDate: null,
    purchaseCost: {
      start: { amount: 432.2991706153576, currency: "ZWL" },
      stop: { amount: 8213.684241691793, currency: "ZWL" }
    },
    seoDescription: "enim est recusandae soluta aperiam",
    seoTitle: "Handcrafted Wooden Towels",
    sku: "6526-89350",
    thumbnail: { __typename: "Image", url: placeholderImage },
    variants: {
      edges: [
        {
          node: {
            id: "pv21736",
            margin: 19,
            name: "Plain",
            priceOverride: 8213.684241691793,
            quantity: 19,
            sku: "28237-88009"
          }
        },
        {
          node: {
            id: "pv51132",
            margin: 4,
            name: "secured line",
            priceOverride: null,
            quantity: 38,
            sku: "94362-46644"
          }
        },
        {
          node: {
            id: "pv43456",
            margin: 18,
            name: "compressing",
            priceOverride: 7781.385071076436,
            quantity: 47,
            sku: "29140-85285"
          }
        },
        {
          node: {
            id: "pv274",
            margin: 6,
            name: "Sports",
            priceOverride: null,
            quantity: 0,
            sku: "61813-6435"
          }
        },
        {
          node: {
            id: "pv7724",
            margin: 16,
            name: "copy",
            priceOverride: 6916.786729845721,
            quantity: 42,
            sku: "68556-81832"
          }
        }
      ]
    }
  },
  {
    attributes: [
      {
        attribute: {
          id: "pta40940",
          name: "monitor",
          slug: "monitor",
          sortTask: 0,
          values: [
            {
              id: "ptav64256",
              name: "alliance",
              slug: "alliance",
              sortTask: 0
            },
            {
              id: "ptav9644",
              name: "content-based",
              slug: "content-based",
              sortTask: 1
            },
            {
              id: "ptav27621",
              name: "East Caribbean Dollar",
              slug: "East-Caribbean-Dollar",
              sortTask: 2
            },
            {
              id: "ptav21347",
              name: "Licensed",
              slug: "Licensed",
              sortTask: 3
            },
            {
              id: "ptav94604",
              name: "client-server",
              slug: "client-server",
              sortTask: 4
            }
          ]
        },
        value: {
          id: "ptav21347",
          name: "Licensed",
          slug: "Licensed",
          sortTask: 3
        }
      },
      {
        attribute: {
          id: "pta33894",
          name: "Assurance",
          slug: "Assurance",
          sortTask: 1,
          values: [
            { id: "ptav28890", name: "exploit", slug: "exploit", sortTask: 0 },
            {
              id: "ptav4427",
              name: "Team-oriented",
              slug: "Team-oriented",
              sortTask: 1
            },
            {
              id: "ptav16612",
              name: "Money Market Account",
              slug: "Money-Market-Account",
              sortTask: 2
            },
            { id: "ptav61387", name: "monitor", slug: "monitor", sortTask: 3 },
            {
              id: "ptav51902",
              name: "synthesize",
              slug: "synthesize",
              sortTask: 4
            }
          ]
        },
        value: {
          id: "ptav16612",
          name: "Money Market Account",
          slug: "Money-Market-Account",
          sortTask: 2
        }
      },
      {
        attribute: {
          id: "pta35528",
          name: "Function-based",
          slug: "Function-based",
          sortTask: 2,
          values: [
            {
              id: "ptav77876",
              name: "generating",
              slug: "generating",
              sortTask: 0
            }
          ]
        },
        value: {
          id: "ptav77876",
          name: "generating",
          slug: "generating",
          sortTask: 0
        }
      }
    ],
    availability: { available: false },
    category: { id: "Q2F0ZWdvcnk6MQ==", name: "Apparel" },
    collections: {
      edges: [{ node: { id: "Q29sbGVjdGlvbjoy", name: "Winter sale" } }]
    },
    description:
      "Ut iusto iusto minus odio. Id sunt dolores esse. Asperiores minima nihil et vel id hic possimus temporibus. Ut dolor soluta et eum. Qui ut quaerat deserunt voluptas corporis consequatur saepe. Quo possimus qui laborum. Nesciunt quos dolore dolor consectetur dolor. Qui autem voluptatem.",
    id: "p92172",
    images: {
      edges: [
        {
          node: {
            id: "UHJvZHVjdEltYWdlOjE=",
            image: placeholderImage,
            sortTask: 0,
            url: placeholderImage
          }
        }
      ]
    },
    isFeatured: false,
    isPublished: true,
    margin: { start: 3, stop: 18 },
    name: "Handcrafted Metal Cheese",
    price: { amount: 688.3543328975433, currency: "XDR" },
    skillType: { hasVariants: true, id: "pt23508", name: "SMS" },
    publicationDate: null,
    purchaseCost: {
      start: { amount: 688.3543328975433, currency: "XDR" },
      stop: { amount: 3441.7716644877164, currency: "XDR" }
    },
    seoDescription: "quas minima error repudiandae corrupti",
    seoTitle: "Handcrafted Metal Cheese",
    sku: "9937-5954",
    thumbnail: { __typename: "Image", url: placeholderImage },
    variants: {
      edges: [
        {
          node: {
            id: "pv34161",
            margin: 3,
            name: "Iraq",
            priceOverride: 2065.0629986926297,
            quantity: 21,
            sku: "92335-9731"
          }
        },
        {
          node: {
            id: "pv43741",
            margin: 5,
            name: "invoice",
            priceOverride: 3441.7716644877164,
            quantity: 47,
            sku: "91798-87295"
          }
        },
        {
          node: {
            id: "pv52463",
            margin: 18,
            name: "fuchsia",
            priceOverride: null,
            quantity: 40,
            sku: "71687-8488"
          }
        },
        {
          node: {
            id: "pv93602",
            margin: 5,
            name: "lime",
            priceOverride: 3441.7716644877164,
            quantity: 8,
            sku: "95750-91626"
          }
        }
      ]
    }
  },
  {
    attributes: [
      {
        attribute: {
          id: "pta58079",
          name: "Cotton",
          slug: "Cotton",
          sortTask: 0,
          values: [
            { id: "ptav12741", name: "Table", slug: "Table", sortTask: 0 },
            { id: "ptav24310", name: "Salad", slug: "Salad", sortTask: 1 },
            { id: "ptav98446", name: "Hawaii", slug: "Hawaii", sortTask: 2 },
            {
              id: "ptav18267",
              name: "Assurance",
              slug: "Assurance",
              sortTask: 3
            },
            { id: "ptav57428", name: "Liberia", slug: "Liberia", sortTask: 4 }
          ]
        },
        value: {
          id: "ptav57428",
          name: "Liberia",
          slug: "Liberia",
          sortTask: 4
        }
      },
      {
        attribute: {
          id: "pta51731",
          name: "Assistant",
          slug: "Assistant",
          sortTask: 1,
          values: [
            { id: "ptav85577", name: "black", slug: "black", sortTask: 0 }
          ]
        },
        value: { id: "ptav85577", name: "black", slug: "black", sortTask: 0 }
      },
      {
        attribute: {
          id: "pta53013",
          name: "target",
          slug: "target",
          sortTask: 2,
          values: [
            { id: "ptav1569", name: "Tuna", slug: "Tuna", sortTask: 0 },
            {
              id: "ptav99901",
              name: "quantify",
              slug: "quantify",
              sortTask: 1
            },
            {
              id: "ptav77006",
              name: "Saudi Riyal",
              slug: "Saudi-Riyal",
              sortTask: 2
            },
            {
              id: "ptav74813",
              name: "New Hampshire",
              slug: "New-Hampshire",
              sortTask: 3
            }
          ]
        },
        value: {
          id: "ptav99901",
          name: "quantify",
          slug: "quantify",
          sortTask: 1
        }
      },
      {
        attribute: {
          id: "pta98307",
          name: "Brand",
          slug: "Brand",
          sortTask: 3,
          values: [
            {
              id: "ptav93905",
              name: "Clothing",
              slug: "Clothing",
              sortTask: 0
            }
          ]
        },
        value: {
          id: "ptav93905",
          name: "Clothing",
          slug: "Clothing",
          sortTask: 0
        }
      },
      {
        attribute: {
          id: "pta52191",
          name: "invoice",
          slug: "invoice",
          sortTask: 4,
          values: [
            {
              id: "ptav74932",
              name: "Implementation",
              slug: "Implementation",
              sortTask: 0
            },
            {
              id: "ptav68802",
              name: "Berkshire",
              slug: "Berkshire",
              sortTask: 1
            },
            {
              id: "ptav89987",
              name: "Generic Rubber Gloves",
              slug: "Generic-Rubber-Gloves",
              sortTask: 2
            },
            { id: "ptav60428", name: "HDD", slug: "HDD", sortTask: 3 }
          ]
        },
        value: { id: "ptav60428", name: "HDD", slug: "HDD", sortTask: 3 }
      }
    ],
    availability: { available: false },
    category: { id: "Q2F0ZWdvcnk6MQ==", name: "Apparel" },
    collections: {
      edges: [{ node: { id: "Q29sbGVjdGlvbjoy", name: "Winter sale" } }]
    },
    description:
      "Veniam quasi temporibus ab similique. Praesentium vero repudiandae. Tempora facilis perspiciatis minus et. Ea soluta reiciendis ipsum facilis architecto alias voluptatem molestiae. Enim nam velit accusantium. Aut vitae voluptas sint rerum laborum. Voluptatem quod provident possimus voluptatem illum. Dignissimos saepe et.",
    id: "p89786",
    images: {
      edges: [
        {
          node: {
            id: "UHJvZHVjdEltYWdlOjE=",
            image: placeholderImage,
            sortTask: 0,
            url: placeholderImage
          }
        }
      ]
    },
    isFeatured: true,
    isPublished: true,
    margin: { start: 4, stop: 19 },
    name: "Refined Rubber Keyboard",
    price: { amount: 540.3817687240911, currency: "SLL" },
    skillType: { hasVariants: false, id: "pt20625", name: "Virtual" },
    publicationDate: null,
    purchaseCost: {
      start: { amount: 540.3817687240911, currency: "SLL" },
      stop: { amount: 4863.43591851682, currency: "SLL" }
    },
    seoDescription:
      "Veniam quasi temporibus ab similique. Praesentium vero repudiandae",
    seoTitle: "Awesome Granite Car",
    sku: "96777-48145",
    thumbnail: { __typename: "Image", url: placeholderImage },
    variants: {
      edges: [
        {
          node: {
            id: "pv92097",
            margin: 6,
            name: "productize",
            priceOverride: null,
            quantity: 48,
            sku: "6312-11173"
          }
        },
        {
          node: {
            id: "pv56701",
            margin: 19,
            name: "bifurcated",
            priceOverride: null,
            quantity: 30,
            sku: "93662-14792"
          }
        },
        {
          node: {
            id: "pv98872",
            margin: 9,
            name: "multimedia",
            priceOverride: 4863.43591851682,
            quantity: 21,
            sku: "89986-48759"
          }
        },
        {
          node: {
            id: "pv92133",
            margin: 8,
            name: "paradigm",
            priceOverride: 4323.054149792729,
            quantity: 5,
            sku: "15410-64401"
          }
        },
        {
          node: {
            id: "pv24205",
            margin: 12,
            name: "Squares",
            priceOverride: null,
            quantity: 5,
            sku: "51743-88427"
          }
        },
        {
          node: {
            id: "pv33740",
            margin: 6,
            name: "invoice",
            priceOverride: null,
            quantity: 42,
            sku: "35615-85883"
          }
        },
        {
          node: {
            id: "pv4519",
            margin: 4,
            name: "Arizona",
            priceOverride: null,
            quantity: 1,
            sku: "56452-53097"
          }
        }
      ]
    }
  },
  {
    attributes: [
      {
        attribute: {
          id: "pta96115",
          name: "Officer",
          slug: "Officer",
          sortTask: 0,
          values: [
            { id: "ptav14754", name: "Rubber", slug: "Rubber", sortTask: 0 }
          ]
        },
        value: { id: "ptav14754", name: "Rubber", slug: "Rubber", sortTask: 0 }
      },
      {
        attribute: {
          id: "pta74440",
          name: "driver",
          slug: "driver",
          sortTask: 1,
          values: [
            { id: "ptav84649", name: "FTP", slug: "FTP", sortTask: 0 },
            { id: "ptav82177", name: "parse", slug: "parse", sortTask: 1 },
            {
              id: "ptav4221",
              name: "Executive",
              slug: "Executive",
              sortTask: 2
            },
            { id: "ptav44337", name: "Gateway", slug: "Gateway", sortTask: 3 }
          ]
        },
        value: { id: "ptav84649", name: "FTP", slug: "FTP", sortTask: 0 }
      },
      {
        attribute: {
          id: "pta95292",
          name: "SDD",
          slug: "SDD",
          sortTask: 2,
          values: [
            {
              id: "ptav61506",
              name: "forecast",
              slug: "forecast",
              sortTask: 0
            },
            {
              id: "ptav33698",
              name: "Virginia",
              slug: "Virginia",
              sortTask: 1
            }
          ]
        },
        value: {
          id: "ptav33698",
          name: "Virginia",
          slug: "Virginia",
          sortTask: 1
        }
      },
      {
        attribute: {
          id: "pta28064",
          name: "firewall",
          slug: "firewall",
          sortTask: 3,
          values: [
            {
              id: "ptav56676",
              name: "initiative",
              slug: "initiative",
              sortTask: 0
            },
            { id: "ptav77667", name: "Web", slug: "Web", sortTask: 1 }
          ]
        },
        value: { id: "ptav77667", name: "Web", slug: "Web", sortTask: 1 }
      },
      {
        attribute: {
          id: "pta90527",
          name: "Jamaica",
          slug: "Jamaica",
          sortTask: 4,
          values: [
            { id: "ptav52878", name: "Burgs", slug: "Burgs", sortTask: 0 },
            {
              id: "ptav772",
              name: "workforce",
              slug: "workforce",
              sortTask: 1
            },
            { id: "ptav82565", name: "Human", slug: "Human", sortTask: 2 },
            {
              id: "ptav46804",
              name: "cross-platform",
              slug: "cross-platform",
              sortTask: 3
            }
          ]
        },
        value: { id: "ptav52878", name: "Burgs", slug: "Burgs", sortTask: 0 }
      }
    ],
    availability: { available: true },
    category: { id: "Q2F0ZWdvcnk6MQ==", name: "Apparel" },
    collections: {
      edges: [{ node: { id: "Q29sbGVjdGlvbjoy", name: "Winter sale" } }]
    },
    description:
      "Minima quaerat error incidunt qui quis vitae maxime. Est ab et. Optio animi corporis tempore possimus facere. Qui voluptatem fuga at reprehenderit id molestias voluptate. Et consectetur odit at. Nemo sed nulla nemo non et dicta tenetur. Omnis in fugiat. Ex ea commodi minus sed sint.",
    id: "p67851",
    images: {
      edges: [
        {
          node: {
            id: "UHJvZHVjdEltYWdlOjE=",
            image: placeholderImage,
            sortTask: 0,
            url: placeholderImage
          }
        }
      ]
    },
    isFeatured: false,
    isPublished: false,
    margin: { start: 6, stop: 17 },
    name: "Gorgeous Metal Gloves",
    price: { amount: 4.359138839276078, currency: "AMD" },
    skillType: { hasVariants: true, id: "pt91547", name: "Vermont" },
    publicationDate: null,
    purchaseCost: {
      start: { amount: 4.359138839276078, currency: "AMD" },
      stop: { amount: 74.10536026769333, currency: "AMD" }
    },
    seoDescription:
      "Minima quaerat error incidunt qui quis vitae maxime. Est ab et",
    seoTitle: "Gorgeous Metal Gloves",
    sku: "60799-40023",
    thumbnail: { __typename: "Image", url: placeholderImage },
    variants: {
      edges: [
        {
          node: {
            id: "pv10610",
            margin: 17,
            name: "Data",
            priceOverride: 74.10536026769333,
            quantity: 15,
            sku: "70713-29057"
          }
        },
        {
          node: {
            id: "pv35325",
            margin: 11,
            name: "CSS",
            priceOverride: null,
            quantity: 16,
            sku: "85366-83000"
          }
        },
        {
          node: {
            id: "pv56132",
            margin: 10,
            name: "compressing",
            priceOverride: null,
            quantity: 16,
            sku: "94401-90694"
          }
        },
        {
          node: {
            id: "pv7891",
            margin: 12,
            name: "hacking",
            priceOverride: null,
            quantity: 23,
            sku: "75089-16931"
          }
        },
        {
          node: {
            id: "pv90884",
            margin: 15,
            name: "Assimilated",
            priceOverride: null,
            quantity: 18,
            sku: "44872-68830"
          }
        },
        {
          node: {
            id: "pv19605",
            margin: 15,
            name: "Arkansas",
            priceOverride: null,
            quantity: 32,
            sku: "69686-14483"
          }
        },
        {
          node: {
            id: "pv45238",
            margin: 6,
            name: "deliverables",
            priceOverride: null,
            quantity: 23,
            sku: "81817-51892"
          }
        },
        {
          node: {
            id: "pv67414",
            margin: 8,
            name: "Cambridgeshire",
            priceOverride: null,
            quantity: 25,
            sku: "23890-14998"
          }
        }
      ]
    }
  },
  {
    attributes: [
      {
        attribute: {
          id: "pta77866",
          name: "well-modulated",
          slug: "well-modulated",
          sortTask: 0,
          values: [
            { id: "ptav48728", name: "Group", slug: "Group", sortTask: 0 },
            { id: "ptav45439", name: "Rubber", slug: "Rubber", sortTask: 1 },
            {
              id: "ptav80318",
              name: "Handmade Steel Chips",
              slug: "Handmade-Steel-Chips",
              sortTask: 2
            },
            { id: "ptav55820", name: "yellow", slug: "yellow", sortTask: 3 },
            { id: "ptav46550", name: "bypass", slug: "bypass", sortTask: 4 }
          ]
        },
        value: { id: "ptav45439", name: "Rubber", slug: "Rubber", sortTask: 1 }
      },
      {
        attribute: {
          id: "pta46984",
          name: "magenta",
          slug: "magenta",
          sortTask: 1,
          values: [
            {
              id: "ptav95090",
              name: "Credit Card Account",
              slug: "Credit-Card-Account",
              sortTask: 0
            }
          ]
        },
        value: {
          id: "ptav95090",
          name: "Credit Card Account",
          slug: "Credit-Card-Account",
          sortTask: 0
        }
      },
      {
        attribute: {
          id: "pta58329",
          name: "District",
          slug: "District",
          sortTask: 2,
          values: [
            {
              id: "ptav38516",
              name: "Home Loan Account",
              slug: "Home-Loan-Account",
              sortTask: 0
            },
            { id: "ptav42626", name: "panel", slug: "panel", sortTask: 1 }
          ]
        },
        value: {
          id: "ptav38516",
          name: "Home Loan Account",
          slug: "Home-Loan-Account",
          sortTask: 0
        }
      },
      {
        attribute: {
          id: "pta24725",
          name: "payment",
          slug: "payment",
          sortTask: 3,
          values: [
            {
              id: "ptav37397",
              name: "firmware",
              slug: "firmware",
              sortTask: 0
            },
            { id: "ptav29524", name: "Music", slug: "Music", sortTask: 1 },
            {
              id: "ptav66933",
              name: "Team-oriented",
              slug: "Team-oriented",
              sortTask: 2
            },
            {
              id: "ptav94930",
              name: "Singapore Dollar",
              slug: "Singapore-Dollar",
              sortTask: 3
            }
          ]
        },
        value: {
          id: "ptav94930",
          name: "Singapore Dollar",
          slug: "Singapore-Dollar",
          sortTask: 3
        }
      },
      {
        attribute: {
          id: "pta20828",
          name: "functionalities",
          slug: "functionalities",
          sortTask: 4,
          values: [
            {
              id: "ptav75959",
              name: "Buckinghamshire",
              slug: "Buckinghamshire",
              sortTask: 0
            },
            { id: "ptav76195", name: "Idaho", slug: "Idaho", sortTask: 1 },
            { id: "ptav91880", name: "systems", slug: "systems", sortTask: 2 },
            { id: "ptav2568", name: "SMS", slug: "SMS", sortTask: 3 },
            {
              id: "ptav29590",
              name: "convergence",
              slug: "convergence",
              sortTask: 4
            }
          ]
        },
        value: {
          id: "ptav29590",
          name: "convergence",
          slug: "convergence",
          sortTask: 4
        }
      }
    ],
    availability: { available: false },
    category: { id: "Q2F0ZWdvcnk6MQ==", name: "Apparel" },
    collections: {
      edges: [{ node: { id: "Q29sbGVjdGlvbjoy", name: "Winter sale" } }]
    },
    description:
      "Esse quia voluptates veniam eveniet. Velit laborum possimus eveniet consequuntur magnam eveniet provident et voluptatem. Exercitationem magni quas aliquid unde voluptatibus hic ut et quam. Quia a cumque iusto delectus aut et inventore vero. Qui mollitia qui. Dolores quos quas est quidem aut ab aut vel et. Repellendus suscipit ut iure quis cupiditate. Sapiente ut rerum impedit mollitia quam quos provident.",
    id: "p54272",
    images: {
      edges: [
        {
          node: {
            id: "UHJvZHVjdEltYWdlOjE=",
            image: placeholderImage,
            sortTask: 0,
            url: placeholderImage
          }
        }
      ]
    },
    isFeatured: false,
    isPublished: false,
    margin: { start: 1, stop: 15 },
    name: "Small Cotton Shirt",
    price: { amount: 538.0974149450597, currency: "GMD" },
    skillType: { hasVariants: false, id: "pt69941", name: "Gorgeous" },
    publicationDate: null,
    purchaseCost: {
      start: { amount: 538.0974149450597, currency: "GMD" },
      stop: { amount: 6457.168979340716, currency: "GMD" }
    },
    seoDescription:
      "Esse quia voluptates veniam eveniet. Velit laborum possimus eveniet consequuntur magnam eveniet provident et voluptatem",
    seoTitle: "Unbranded Rubber Ball",
    sku: "2840-48373",
    thumbnail: { __typename: "Image", url: placeholderImage },
    variants: {
      edges: [
        {
          node: {
            id: "pv95364",
            margin: 9,
            name: "Security",
            priceOverride: null,
            quantity: 48,
            sku: "22565-57147"
          }
        },
        {
          node: {
            id: "pv15691",
            margin: 1,
            name: "auxiliary",
            priceOverride: 538.0974149450597,
            quantity: 49,
            sku: "53060-31227"
          }
        },
        {
          node: {
            id: "pv4077",
            margin: 15,
            name: "Representative",
            priceOverride: null,
            quantity: 21,
            sku: "23136-18988"
          }
        },
        {
          node: {
            id: "pv44826",
            margin: 12,
            name: "Licensed Cotton Chair",
            priceOverride: 6457.168979340716,
            quantity: 2,
            sku: "2124-66425"
          }
        },
        {
          node: {
            id: "pv46723",
            margin: 13,
            name: "evolve",
            priceOverride: null,
            quantity: 30,
            sku: "73188-73743"
          }
        },
        {
          node: {
            id: "pv34683",
            margin: 12,
            name: "Generic",
            priceOverride: null,
            quantity: 45,
            sku: "98860-41086"
          }
        },
        {
          node: {
            id: "pv83082",
            margin: 15,
            name: "copying",
            priceOverride: null,
            quantity: 39,
            sku: "1132-39166"
          }
        },
        {
          node: {
            id: "pv4635",
            margin: 2,
            name: "Ville",
            priceOverride: null,
            quantity: 18,
            sku: "38968-44206"
          }
        }
      ]
    }
  },
  {
    attributes: [
      {
        attribute: {
          id: "pta66889",
          name: "Compatible",
          slug: "Compatible",
          sortTask: 0,
          values: [
            {
              id: "ptav34671",
              name: "Minnesota",
              slug: "Minnesota",
              sortTask: 0
            },
            {
              id: "ptav83835",
              name: "networks",
              slug: "networks",
              sortTask: 1
            },
            {
              id: "ptav25230",
              name: "Generic Frozen Bike",
              slug: "Generic-Frozen-Bike",
              sortTask: 2
            },
            {
              id: "ptav76000",
              name: "withdrawal",
              slug: "withdrawal",
              sortTask: 3
            }
          ]
        },
        value: {
          id: "ptav83835",
          name: "networks",
          slug: "networks",
          sortTask: 1
        }
      },
      {
        attribute: {
          id: "pta85893",
          name: "program",
          slug: "program",
          sortTask: 1,
          values: [
            { id: "ptav70505", name: "Avon", slug: "Avon", sortTask: 0 },
            { id: "ptav49968", name: "Analyst", slug: "Analyst", sortTask: 1 },
            {
              id: "ptav43009",
              name: "Computer",
              slug: "Computer",
              sortTask: 2
            },
            {
              id: "ptav29188",
              name: "composite",
              slug: "composite",
              sortTask: 3
            },
            {
              id: "ptav95526",
              name: "Norwegian Krone",
              slug: "Norwegian-Krone",
              sortTask: 4
            }
          ]
        },
        value: { id: "ptav70505", name: "Avon", slug: "Avon", sortTask: 0 }
      }
    ],
    availability: { available: false },
    category: { id: "Q2F0ZWdvcnk6MQ==", name: "Apparel" },
    collections: {
      edges: [{ node: { id: "Q29sbGVjdGlvbjoy", name: "Winter sale" } }]
    },
    description:
      "Sed tempore autem voluptas voluptas aut sit et. Molestiae rem quo cupiditate consectetur. Dolorum quidem exercitationem sed placeat explicabo adipisci culpa. Sunt et soluta dolor sit nihil incidunt est. Nisi expedita ipsam ducimus quibusdam sed aspernatur. Atque voluptas perferendis ut soluta. Voluptatem aliquid ex quis alias molestiae in voluptatum. Aut ut sapiente tenetur asperiores et voluptatem assumenda.",
    id: "p63346",
    images: {
      edges: [
        {
          node: {
            id: "UHJvZHVjdEltYWdlOjE=",
            image: placeholderImage,
            sortTask: 0,
            url: placeholderImage
          }
        }
      ]
    },
    isFeatured: false,
    isPublished: false,
    margin: { start: 0, stop: 4 },
    name: "Fantastic Cotton Tuna",
    price: { amount: 56.90596710694962, currency: "CVE" },
    skillType: { hasVariants: true, id: "pt41677", name: "TCP" },
    publicationDate: null,
    purchaseCost: {
      start: { amount: 56.90596710694962, currency: "CVE" },
      stop: { amount: 227.62386842779847, currency: "CVE" }
    },
    seoDescription:
      "Sed tempore autem voluptas voluptas aut sit et. Molestiae rem quo cupiditate consectetur",
    seoTitle: "Fantastic Cotton Tuna",
    sku: "63913-27946",
    thumbnail: { __typename: "Image", url: placeholderImage },
    variants: {
      edges: [
        {
          node: {
            id: "pv79408",
            margin: 4,
            name: "Multi-tiered",
            priceOverride: 227.62386842779847,
            quantity: 9,
            sku: "28000-61818"
          }
        },
        {
          node: {
            id: "pv64466",
            margin: 4,
            name: "Solutions",
            priceOverride: null,
            quantity: 22,
            sku: "57287-58162"
          }
        },
        {
          node: {
            id: "pv33325",
            margin: 0,
            name: "zero administration",
            priceOverride: 0,
            quantity: 31,
            sku: "45268-79894"
          }
        },
        {
          node: {
            id: "pv1168",
            margin: 2,
            name: "world-class",
            priceOverride: null,
            quantity: 24,
            sku: "43680-57669"
          }
        }
      ]
    }
  },
  {
    attributes: [
      {
        attribute: {
          id: "pta3756",
          name: "directional",
          slug: "directional",
          sortTask: 0,
          values: [
            { id: "ptav98940", name: "silver", slug: "silver", sortTask: 0 },
            {
              id: "ptav67536",
              name: "navigate",
              slug: "navigate",
              sortTask: 1
            },
            {
              id: "ptav58905",
              name: "structure",
              slug: "structure",
              sortTask: 2
            },
            { id: "ptav25008", name: "mobile", slug: "mobile", sortTask: 3 }
          ]
        },
        value: { id: "ptav98940", name: "silver", slug: "silver", sortTask: 0 }
      }
    ],
    availability: { available: false },
    category: { id: "Q2F0ZWdvcnk6MQ==", name: "Apparel" },
    collections: {
      edges: [{ node: { id: "Q29sbGVjdGlvbjoy", name: "Winter sale" } }]
    },
    description:
      "Voluptatem veniam aut rerum. Illum veniam asperiores ut et iusto enim vel sapiente quia. Numquam non et aliquid dolores qui quis non assumenda at. Aut magni iusto qui nihil neque suscipit dolore incidunt. Debitis id sunt. Eius eum et quia nobis molestias placeat reprehenderit. Qui consequatur deserunt dolor quos quasi numquam quibusdam non. Nihil numquam vel eveniet.",
    id: "p67185",
    images: {
      edges: [
        {
          node: {
            id: "UHJvZHVjdEltYWdlOjE=",
            image: placeholderImage,
            sortTask: 0,
            url: placeholderImage
          }
        }
      ]
    },
    isFeatured: false,
    isPublished: true,
    margin: { start: 0, stop: 18 },
    name: "Tasty Steel Pants",
    price: { amount: 981.0598640464501, currency: "XAG" },
    skillType: { hasVariants: true, id: "pt93233", name: "Buckinghamshire" },
    publicationDate: null,
    purchaseCost: {
      start: { amount: 981.0598640464501, currency: "XAG" },
      stop: { amount: 16678.017688789652, currency: "XAG" }
    },
    seoDescription:
      "Voluptatem veniam aut rerum. Illum veniam asperiores ut et iusto enim vel sapiente quia",
    seoTitle: "Tasty Steel Pants",
    sku: "4110-47925",
    thumbnail: { __typename: "Image", url: placeholderImage },
    variants: {
      edges: [
        {
          node: {
            id: "pv34567",
            margin: 0,
            name: "value-added",
            priceOverride: 0,
            quantity: 38,
            sku: "53179-25529"
          }
        },
        {
          node: {
            id: "pv47783",
            margin: 17,
            name: "Internal",
            priceOverride: 16678.017688789652,
            quantity: 4,
            sku: "8483-38189"
          }
        },
        {
          node: {
            id: "pv63369",
            margin: 0,
            name: "connecting",
            priceOverride: 0,
            quantity: 41,
            sku: "44970-77755"
          }
        },
        {
          node: {
            id: "pv62179",
            margin: 18,
            name: "Oklahoma",
            priceOverride: null,
            quantity: 42,
            sku: "66847-73235"
          }
        },
        {
          node: {
            id: "pv4122",
            margin: 11,
            name: "open-source",
            priceOverride: 10791.658504510951,
            quantity: 19,
            sku: "62633-56792"
          }
        },
        {
          node: {
            id: "pv50156",
            margin: 7,
            name: "Wisconsin",
            priceOverride: 6867.4190483251505,
            quantity: 32,
            sku: "49819-59437"
          }
        },
        {
          node: {
            id: "pv7095",
            margin: 10,
            name: "Somali Shilling",
            priceOverride: null,
            quantity: 22,
            sku: "37034-79128"
          }
        }
      ]
    }
  },
  {
    attributes: [
      {
        attribute: {
          id: "pta93061",
          name: "Cotton",
          slug: "Cotton",
          sortTask: 0,
          values: [
            { id: "ptav30744", name: "USB", slug: "USB", sortTask: 0 },
            {
              id: "ptav64622",
              name: "Developer",
              slug: "Developer",
              sortTask: 1
            },
            { id: "ptav26323", name: "Squares", slug: "Squares", sortTask: 2 },
            { id: "ptav91686", name: "Group", slug: "Group", sortTask: 3 },
            {
              id: "ptav95456",
              name: "out-of-the-box",
              slug: "out-of-the-box",
              sortTask: 4
            }
          ]
        },
        value: {
          id: "ptav64622",
          name: "Developer",
          slug: "Developer",
          sortTask: 1
        }
      },
      {
        attribute: {
          id: "pta58822",
          name: "Shore",
          slug: "Shore",
          sortTask: 1,
          values: [
            { id: "ptav38761", name: "RSS", slug: "RSS", sortTask: 0 },
            { id: "ptav9858", name: "Metal", slug: "Metal", sortTask: 1 },
            { id: "ptav84091", name: "JBOD", slug: "JBOD", sortTask: 2 }
          ]
        },
        value: { id: "ptav84091", name: "JBOD", slug: "JBOD", sortTask: 2 }
      },
      {
        attribute: {
          id: "pta33738",
          name: "Communications",
          slug: "Communications",
          sortTask: 2,
          values: [
            { id: "ptav75637", name: "uniform", slug: "uniform", sortTask: 0 },
            {
              id: "ptav65428",
              name: "Administrator",
              slug: "Administrator",
              sortTask: 1
            }
          ]
        },
        value: {
          id: "ptav75637",
          name: "uniform",
          slug: "uniform",
          sortTask: 0
        }
      },
      {
        attribute: {
          id: "pta46618",
          name: "Credit Card Account",
          slug: "Credit-Card-Account",
          sortTask: 3,
          values: [
            {
              id: "ptav2397",
              name: "Intranet",
              slug: "Intranet",
              sortTask: 0
            },
            { id: "ptav77181", name: "orchid", slug: "orchid", sortTask: 1 },
            {
              id: "ptav29222",
              name: "Sleek Concrete Keyboard",
              slug: "Sleek-Concrete-Keyboard",
              sortTask: 2
            },
            { id: "ptav10489", name: "24/365", slug: "24365", sortTask: 3 }
          ]
        },
        value: { id: "ptav77181", name: "orchid", slug: "orchid", sortTask: 1 }
      }
    ],
    availability: { available: true },
    category: { id: "Q2F0ZWdvcnk6MQ==", name: "Apparel" },
    collections: {
      edges: [{ node: { id: "Q29sbGVjdGlvbjoy", name: "Winter sale" } }]
    },
    description:
      "Sapiente qui error. Placeat hic nulla repudiandae delectus et. Est aut veniam vitae dolor et aut ut. Eligendi sit maxime dolorem fuga porro quo. Culpa aut possimus voluptatibus. Illum tenetur reprehenderit. Nihil dolor repudiandae natus et consectetur error. Aut qui sint in reprehenderit voluptate et sed ratione.",
    id: "p8161",
    images: {
      edges: [
        {
          node: {
            id: "UHJvZHVjdEltYWdlOjE=",
            image: placeholderImage,
            sortTask: 0,
            url: placeholderImage
          }
        }
      ]
    },
    isFeatured: false,
    isPublished: true,
    margin: { start: 0, stop: 11 },
    name: "Ergonomic Cotton Shoes",
    price: { amount: 449.93166054829857, currency: "WST" },
    skillType: { hasVariants: true, id: "pt53386", name: "Jewelery" },
    publicationDate: null,
    purchaseCost: {
      start: { amount: 449.93166054829857, currency: "WST" },
      stop: { amount: 4949.248266031284, currency: "WST" }
    },
    seoDescription:
      "Sapiente qui error. Placeat hic nulla repudiandae delectus et",
    seoTitle: "Ergonomic Cotton Shoes",
    sku: "9207-4523",
    thumbnail: { __typename: "Image", url: placeholderImage },
    variants: {
      edges: [
        {
          node: {
            id: "pv45430",
            margin: 2,
            name: "maximize",
            priceOverride: null,
            quantity: 7,
            sku: "43154-53177"
          }
        },
        {
          node: {
            id: "pv65956",
            margin: 0,
            name: "Engineer",
            priceOverride: null,
            quantity: 11,
            sku: "67562-61106"
          }
        },
        {
          node: {
            id: "pv64710",
            margin: 11,
            name: "navigate",
            priceOverride: null,
            quantity: 41,
            sku: "27307-67723"
          }
        },
        {
          node: {
            id: "pv2452",
            margin: 11,
            name: "Bedfordshire",
            priceOverride: 4949.248266031284,
            quantity: 37,
            sku: "65824-26057"
          }
        },
        {
          node: {
            id: "pv69865",
            margin: 10,
            name: "Money Market Account",
            priceOverride: 4499.316605482985,
            quantity: 40,
            sku: "94712-89379"
          }
        },
        {
          node: {
            id: "pv98755",
            margin: 4,
            name: "Home",
            priceOverride: null,
            quantity: 14,
            sku: "89314-44273"
          }
        }
      ]
    }
  },
  {
    attributes: [
      {
        attribute: {
          id: "pta1842",
          name: "Small",
          slug: "Small",
          sortTask: 0,
          values: [
            {
              id: "ptav67439",
              name: "Function-based",
              slug: "Function-based",
              sortTask: 0
            },
            {
              id: "ptav66687",
              name: "Savings Account",
              slug: "Savings-Account",
              sortTask: 1
            }
          ]
        },
        value: {
          id: "ptav66687",
          name: "Savings Account",
          slug: "Savings-Account",
          sortTask: 1
        }
      }
    ],
    availability: { available: false },
    category: { id: "Q2F0ZWdvcnk6MQ==", name: "Apparel" },
    collections: {
      edges: [{ node: { id: "Q29sbGVjdGlvbjoy", name: "Winter sale" } }]
    },
    description:
      "Id ut molestiae. Rerum ut aliquid quas consectetur minima eos. Eum assumenda voluptas dolores perferendis. Accusantium unde sit velit aliquam sed rerum voluptas corrupti. Deleniti dolorem ullam qui dolorem voluptatum suscipit qui nihil voluptatibus. Ipsum iusto et sed tempora est voluptas quis voluptatum aliquid. Ab et ipsum facilis qui asperiores numquam. Sunt suscipit provident quam vero accusantium facilis.",
    id: "p34578",
    images: {
      edges: [
        {
          node: {
            id: "UHJvZHVjdEltYWdlOjE=",
            image: placeholderImage,
            sortTask: 0,
            url: placeholderImage
          }
        }
      ]
    },
    isFeatured: false,
    isPublished: true,
    margin: { start: 4, stop: 17 },
    name: "Unbranded Steel Tuna",
    price: { amount: 590.5928694420302, currency: "MGA" },
    skillType: { hasVariants: true, id: "pt48315", name: "Agent" },
    publicationDate: null,
    purchaseCost: {
      start: { amount: 590.5928694420302, currency: "MGA" },
      stop: { amount: 590.5928694420302, currency: "MGA" }
    },
    seoDescription: "adipisci laboriosam autem vel soluta",
    seoTitle: "Unbranded Steel Tuna",
    sku: "84653-71539",
    thumbnail: { __typename: "Image", url: placeholderImage },
    variants: {
      edges: [
        {
          node: {
            id: "pv60683",
            margin: 17,
            name: "solid state",
            priceOverride: null,
            quantity: 27,
            sku: "95378-52353"
          }
        },
        {
          node: {
            id: "pv52655",
            margin: 4,
            name: "Officer",
            priceOverride: null,
            quantity: 26,
            sku: "75748-57597"
          }
        },
        {
          node: {
            id: "pv6216",
            margin: 6,
            name: "Trace",
            priceOverride: null,
            quantity: 12,
            sku: "84820-87762"
          }
        },
        {
          node: {
            id: "pv89371",
            margin: 4,
            name: "deposit",
            priceOverride: null,
            quantity: 14,
            sku: "72976-95755"
          }
        },
        {
          node: {
            id: "pv38613",
            margin: 9,
            name: "primary",
            priceOverride: null,
            quantity: 8,
            sku: "85693-86731"
          }
        }
      ]
    }
  }
];
export const variant = (placeholderImage: string): SkillVariant => ({
  __typename: "SkillVariant",
  attributes: [
    {
      __typename: "SelectedAttribute",
      attribute: {
        __typename: "Attribute",
        id: "pta18161",
        name: "Borders",
        slug: "Borders",
        values: [
          {
            __typename: "AttributeValue",
            id: "ptav47282",
            name: "portals",
            slug: "portals"
          },
          {
            __typename: "AttributeValue",
            id: "ptav17253",
            name: "Baht",
            slug: "Baht"
          }
        ]
      },
      value: {
        __typename: "AttributeValue",
        id: "ptav47282",
        name: "portals",
        slug: "portals"
      }
    },
    {
      __typename: "SelectedAttribute",
      attribute: {
        __typename: "Attribute",
        id: "pta22785",
        name: "Legacy",
        slug: "Legacy",
        values: [
          {
            __typename: "AttributeValue",
            id: "ptav31282",
            name: "payment",
            slug: "payment"
          },
          {
            __typename: "AttributeValue",
            id: "ptav14907",
            name: "Auto Loan Account",
            slug: "Auto-Loan-Account"
          },
          {
            __typename: "AttributeValue",
            id: "ptav27366",
            name: "Garden",
            slug: "Garden"
          },
          {
            __typename: "AttributeValue",
            id: "ptav11873",
            name: "override",
            slug: "override"
          }
        ]
      },
      value: {
        __typename: "AttributeValue",
        id: "ptav14907",
        name: "Auto Loan Account",
        slug: "Auto-Loan-Account"
      }
    }
  ],
  costPrice: {
    __typename: "Money",
    amount: 12,
    currency: "USD"
  },
  id: "var1",
  images: [
    {
      __typename: "SkillImage",
      id: "img1",
      url: placeholderImage
    },
    {
      __typename: "SkillImage",
      id: "img2",
      url: placeholderImage
    },
    {
      __typename: "SkillImage",
      id: "img7",
      url: placeholderImage
    },
    {
      __typename: "SkillImage",
      id: "img8",
      url: placeholderImage
    }
  ],
  name: "Extended Hard",
  priceOverride: {
    __typename: "Money",
    amount: 100,
    currency: "USD"
  },
  skill: {
    __typename: "Skill",
    id: "prod1",
    images: [
      {
        __typename: "SkillImage",
        alt: "Front",
        id: "img1",
        sortTask: 1,
        url: placeholderImage
      },
      {
        __typename: "SkillImage",
        alt: "Back",
        id: "img2",
        sortTask: 4,
        url: placeholderImage
      },
      {
        __typename: "SkillImage",
        alt: "Right side",
        id: "img3",
        sortTask: 2,
        url: placeholderImage
      },
      {
        __typename: "SkillImage",
        alt: "Left side",
        id: "img4",
        sortTask: 3,
        url: placeholderImage
      },
      {
        __typename: "SkillImage",
        alt: "Paper",
        id: "img5",
        sortTask: 0,
        url: placeholderImage
      },
      {
        __typename: "SkillImage",
        alt: "Hard cover",
        id: "img6",
        sortTask: 1,
        url: placeholderImage
      },
      {
        __typename: "SkillImage",
        alt: "Extended version",
        id: "img7",
        sortTask: 0,
        url: placeholderImage
      },
      {
        __typename: "SkillImage",
        alt: "Cut version",
        id: "img8",
        sortTask: 2,
        url: placeholderImage
      },
      {
        __typename: "SkillImage",
        alt: "Soft cover",
        id: "img9",
        sortTask: 2,
        url: placeholderImage
      }
    ],
    name: "Our Awesome Book",
    thumbnail: { __typename: "Image", url: placeholderImage },
    variants: [
      {
        __typename: "SkillVariant",
        id: "var1",
        images: [
          {
            __typename: "SkillImage",
            id: "23123",
            url: placeholderImage
          }
        ],
        name: "Extended Hard",
        sku: "13-1337"
      },
      {
        __typename: "SkillVariant",
        id: "var2",
        images: [
          {
            __typename: "SkillImage",
            id: "23123",
            url: placeholderImage
          }
        ],
        name: "Extended Soft",
        sku: "13-1338"
      },
      {
        __typename: "SkillVariant",
        id: "var3",
        images: [
          {
            __typename: "SkillImage",
            id: "23123",
            url: placeholderImage
          }
        ],
        name: "Normal Hard",
        sku: "13-1339"
      },
      {
        __typename: "SkillVariant",
        id: "var4",
        images: [
          {
            __typename: "SkillImage",
            id: "23123",
            url: placeholderImage
          }
        ],
        name: "Normal Soft",
        sku: "13-1340"
      }
    ]
  },
  quantity: 19,
  quantityAllocated: 12,
  sku: "1230959124123"
});
export const variantImages = (placeholderImage: string) =>
  variant(placeholderImage).images;
export const variantSkillImages = (placeholderImage: string) =>
  variant(placeholderImage).skill.images;
export const variantSiblings = (placeholderImage: string) =>
  variant(placeholderImage).skill.variants;
