"use client";

const GILISTING = [
  {
    id: 1,
    title: "KASHMIR PASHMINA",
    registered: "Kashmir Pashmina",
    registration: 46,
    classes: [
      "Class 23 - Yarns and Threads, for textile use",
      "Class 24 - Textiles and Textiles goods, not included in other classes; bed and table covers",
      "Class 25 – Clothing",
    ],
    specifications: [
      "Made of undergrowth of fleece from the mountain goat “Capra Hiracus” having a fineness of 12-16 Microns.",
      "Made of delicate, fine woolen yarn that is spun out of this fleece by the hand spinning process.",
      "Is hand woven using warp & weft yarns.",
      "Is woven in 3 weaves, the Twill weave, the Diamond weave and the Herringbone weave.",
      "Have dyed/undyed yarn for weaving.",
      "Is rendered / un rendered with fine hand embroidery in different proportions.",
    ],
  },

  {
    id: 2,
    title: "SOZANI CRAFT",
    registered: "Kashmir Sozani Craft",
    registration: 48,
    classes: [
      "Class 26 - Sozani Embroidery performed on different Apparels fabrics",
    ],
    specifications: [
      "Fine Needlework on various fabrics, done by a Sozankar employing predominantly the Sozani Stitch, Darn Stitch and Stem Stitch using silk and viscose yarns. Buttonhole stitch, Herring bone stitch, Chain stitch, Satin Stitch and Knot stitches are also used, though in limited proportions.",
      "The Sozani stitch is a fine couching stitch with a reinforcing stitch laid over a basic stitch.",
      "The Sozani stitch can be simple, continuous line or a diamond shaped outline used for petals and flowers. It can also be used in filling up of a motif. It always has a reinforcing stitch.",
      "The Sozani stitch lends a delicacy to the overall embroidery and uniformity on both sides of the fabric.",
      "The most dominant motif in Sozani Embroidery is the ‘buti’, which is a floral or Almond motif with a bent tip.",
      "Sozani Embroidery has a rich colour spectrum and exquisite motifs depicting natural flora and fauna of the Kashmir Valley. Popular motifs include the Chinar leaf and Cypress tree, Almond, Grapes, Pomegranates and Cotton seeds, and flowers like the Iris, Narcissus, Lotus, Daffodil, Pansy, Lily and Rose; as well as geometrical themes like octagonal phanus, Dontavot and Agraphool.",
    ],
  },
  {
    id: 3,
    title: "WALNUT WOOD CARVING",
    registered: "Walnut Wood Carving",
    registration: 182,
    classes: [
      "Class 8, 20 & 27 – Furniture like table desk, dinning tables, dressers, side tables, cabinets, wardrobes, (door panels), chairs sofas, stools, beds, folding screens, bookracks, mirror frames, dry fruits bowls, trays, lamps, candle stands, incense burners, snuff boxes, jewellery boxes, including boxes for holding bracelets, powder, shoe, rings, perfume, handkerchief, cigarette case, pen case, book case, watch box, wooden knives, spoons, forks, sculpture, models of house boats, goods of utilitarian nature and decorative nature that are made of walnut and embellished with hand carving, mirrors, picture frames, goods (not included in other classes) of wood, cork, red, came, wicker, horn, ivory, whalebone, shall, amber, mother of pearl, meerschaum and substitute for all the these materials, of plastics; made from Paper and Paper pulp and wall hanging.",
    ],
    specifications: [
      "The wood used in the products is derived from the walnut tree (Juglans regia), locally known as dhoon kul.",
      "Kashmir Walnut Wood Carving is made from cultivated varieties of walnut wood (wantu, dun, khakazi), not wild trees.",
      "Kashmir Walnut Wood is hard, compact, durable, and light in color with close grain and even texture, suitable for fine, detailed carving.",
      "Designs and motifs often reflect the flora and fauna of Kashmir.",
      "Different kinds of workmanship include undercutting (Khokerdar), open or lattice work (Jallidahr or Shabokdhar), raised carving (Vaboraveth), engraved carving (Padri), and shallow or plain carving (Sadikaam).",
      "The range of products includes large furniture items (cabinets, beds, dining tables, folding screens, book racks) to smaller pieces (trays, lamps, candle stands, jewellery cases, mirror cases, cigarette cases, personal accessories, cutlery items, sculptures, display objects, etc.).",
    ],
  },
  {
    id: 4,
    title: "KASHMIR PAPER MACHIE",
    registered: "Kashmir Paper Machie",
    registration: 181,
    classes: [
      "Class 16 & 20 - goods made from paper and paper pulp and embellished with traditional hands painted motifs and designs, and good of utilitarian and decorative nature in particular boxes, bowls vases, lamps, trays, candleholders, photo frames, Christmas decoration, furniture, jewelry boxes all made of light weight base material like paper pulp, paper board or wood and embellished with traditional hand painted motifs and designs.",
    ],
    specifications: [
      "The base object is made of paper pulp, paper board (ghata) or light wood.",
      "It is smoothened using sareesh or traditional primer and gypsum paste or gacch and later with kirkut or pumice stone/burnt brick.",
      "Naqash or traditional painter incorporates fine traditional designs and motifs depicting flora and fauna of Kashmir.",
      "Designs include free hand motifs, floral or vegetative patterns including roses, iris, carnations, apple blossoms, lotus, narcissus, daffodils, grapes, chinar leaves, etc.",
      "Designs also have characteristic gold and silver metallic effects applied by traditional methods.",
      "The hand painting could be flat surfaced or have an embossed effect.",
      "Characteristic products include boxes, bowls, vases, lamps, trays, soorais, candleholders, photo frames, Christmas decorations, screens, tables and large jewellery boxes.",
    ],
  },
  {
    id: 5,
    title: "KASHMIR KHATAMBAND",
    registered: "Khatamband",
    registration: 204,
    classes: [
      "19 - Building materials, ( non- metallic), non - metallic rigid pipes for building, non- metallic transpotable buildings, monuments, not of metal including false ceiling, wood panels, doors & windows, frames made of wood.",
      "Class 20- Furniture , mirrors, picture frames, goods ( not included in other classes ) of wood.",
    ],
    specifications: [
      "One of the oldest known wooden crafts in Kashmir, dating from the 14th century onwards.",
      "Commonly used for ceiling and paneling with small pieces of pine, rubber wood, Burma teak, walnut, or budloo wood. Designs originate from repetitive, geometrical, tessellating patterns with a definite mathematical foundation.",
      "Wooden pieces are carved and cut based on a master scale (kannat) for each design. They are assembled without nails or glue, forming a continuous panel.",
      "Durable for more than 100 years with minimal maintenance. The final product is dismantlable and reusable.",
      "Provides natural insulation against cold temperatures.",
      "May feature value additions like hand carving or hand painting. Historical examples in old monuments are richly decorated with naquashi work, paper-machie layers, traditional Kashmiri motifs, and gold embellishments.",
    ],
  },
  {
    id: 6,
    title: "HAND KNOTTED CARPET",
    registered: "Hand Knotted Carpet",
    registration: 527,
    classes: ["Class 27 – Carpets"],
    specifications: [
      "Kashmiri Carpet weaving uses a unique coded script called Taleem, understood only by Kashmiri weavers, guiding the number and color of knots.",
      "Kashmir carpets are always hand-knotted, leading to high knot density and clarity of design.",
      "Silk/Cotton carpets: Cotton warp, silk pile (knot), cotton weft. Common qualities: 18/18 KPSI, 16/16 KPSI.",
      "Silk/Silk carpets: Silk warp, silk pile (knot), cotton weft. Most exquisite and costly variety. Qualities include 40x40 (1600 knots/sq.in), 30x30, 24x24, 22x22, 20x20 KPSI.",
      "All Silk carpets: Silk warp, silk pile (knot), silk weft.",
      "Wool/Cotton carpets: Cotton warp, woolen pile (knot), cotton weft.",
      "Wool/Silk/Cotton (Silk Mattan) carpets: Cotton warp, silk and wool pile, cotton weft.",
      "Designs are traditionally oriental and floral, featuring culturally significant motifs like the paisley, Chinar tree, and the tree-of-life.",
    ],
  },
  {
    id: 7,
    title: "KASHMIR CREWEL",
    registered: "Kashmir Crewel",
    registration: 1047,
    classes: ["Class 26"],
    specifications: [
      "Crewel embroidery is a spread-out form of embroidery, typically not covering the entire fabric surface.",
      "Usually done on upholstery and drapery fabrics (like curtains), cushion covers, and accessories such as bags and clutches.",
      "Crewel embroidery is executed with the help of an Aari needle with a larger hook.",
      "Natural single-ply wool yarn is used for the embroidery.",
      "The technique involves long chains of loops, leaving the base fabric visible.",
      "Primarily done on duck or dosooti cotton fabric.",
      "The motif does not completely cover the background, creating a contrast between the design and the background fabric.",
    ],
  },
];

export const GIListing = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {GILISTING.map((list) => (
          <div
            key={`list-${list.id}`}
            className="grid grid-cols-1 gap-4 rounded-lg bg-white px-4 py-6 transition-all duration-300 hover:bg-primary hover:text-white md:grid-cols-2 md:px-6 md:py-10"
          >
            <div className="grid gap-4 md:gap-8">
              <h2 className="font-montserrat text-xl md:text-2xl">
                {list.title}
              </h2>
              <p className="font-montserrat text-base md:text-xl">
                GEOGRAPHICAL INDICATION
              </p>
              <p className="font-montserrat text-base md:text-xl">
                Registered GI: {list.registered}
              </p>
              <p className="font-opensans text-xs font-semibold md:text-sm">
                Registered GI Application No: {list.registration}
              </p>
              <div className="grid gap-2">
                <p className="font-montserrat text-base md:text-xl">
                  Glass & Goods:
                </p>
                {
                  list.classes.map((data,index)=>(
                    <p className="font-opensans text-xs md:text-sm font-bold" key={index}>{data}</p>    
                  ))
                }
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-montserrat text-lg md:text-xl">
                Specifications
              </h2>
              <ol className="grid list-inside list-decimal gap-2">
                {list.specifications.map((data, specIndex) => (
                  <li
                    key={`spec-${list.id}-${specIndex}`}
                    className="text-xs md:text-sm"
                  >
                    {data}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
