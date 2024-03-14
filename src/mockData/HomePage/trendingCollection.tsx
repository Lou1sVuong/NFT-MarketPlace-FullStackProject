import koolGirl from "../../assets/images/avatars/koolGirl.svg";
import monkeyD from "../../assets/images/avatars/monkeyD.svg";
import mrFox from "../../assets/images/avatars/mrFox.svg";
import Image1 from "../../assets/images/marketPlace/Image1.png";
import Image2 from "../../assets/images/marketPlace/Image2.png";
import Image3 from "../../assets/images/marketPlace/Image3.png";
import Image4 from "../../assets/images/marketPlace/Image4.png";
import Image5 from "../../assets/images/marketPlace/Image5.png";
import Image6 from "../../assets/images/marketPlace/Image6.png";
import Image7 from "../../assets/images/marketPlace/Image7.png";
import Image8 from "../../assets/images/marketPlace/Image8.png";
import Image9 from "../../assets/images/marketPlace/Image9.png";

const trendingCollection = [
    {
        mainImage: Image1,
        galleryImages: [
            Image2,
            Image3,
            Image3,
        ],
        title: 'Happy Robots',
        profileImage: koolGirl,
        username: 'koolGirl',
        rank: 1,
    },
    {
        mainImage: Image4,
        galleryImages: [
            Image5,
            Image6,
            Image6,
            Image6,
            Image6,
        ],
        title: 'Smiling Androids 3',
        profileImage: monkeyD,
        username: 'monkeyD',
        rank: 3,
    },
    {
        mainImage: Image7,
        galleryImages: [
            Image8,
            Image9,
            Image3,
            Image3,
            Image3,
        ],
        title: 'Smiling Androids',
        profileImage: mrFox,
        username: 'mrFox',
        rank: 2,
    },
];

export default trendingCollection;