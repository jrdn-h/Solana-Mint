import mainBanner from '../images/main_banner_place_holder.png';
import secondaryBanner from '../images/secondry_banner_place_holder.png';
import logo from '../images/nft/logo2.gif';
import nft1 from '../images/nft/nft_sample_1.gif';
import teamMember1 from '../images/team/team_member_1.png';
import teamMember2 from '../images/team/team_member_2.png';
import teamMember3 from '../images/team/team_member_3.png';
import teamMember4 from '../images/team/team_member_4.png';
import teamMember5 from '../images/team/team_member_5.png';
import twitterLogo from '../images/twitter/Logo white.svg';
import discordLogo from '../images/discord/icon_clyde_white_RGB.svg';
import MediumLogo from '../images/discord/Medium.png';

const Config = {
  navbar: {
    logo: logo
  },
  showcaseMain: {
    backGroundImage: mainBanner,
  },
  showcaseSecondary: {
    backGroundImage: secondaryBanner,
  },
  about: {
    name: 'MetaMartians',
    image: nft1,
    text: 'MetaMartians once lived in harmony in Web2, but this harmony was short-lived. Everything changed when they were trying to decide whether to move to Web3 for a better future. The disagreement began on which blockchain to move. The conflict split the Martians into two groups: 5,000 that supported Solana and 5,000 that supported Ethereum. After a terrible civil war, half the population was eradicated. The two groups agreed for their civilization to coexist on both blockchains. This evenly split the Martians 2,500 and 2,500 between Solana and Ethereum. By buying a MetaMartian on the Solana blockchain, you will be whitelisted to get a MetaMartian on the Ethereum blockchain in the future.'
  },
  story: {
    title: 'About',
    text: 'Each MetaMartian NFT will be used as an entrance pass to our community Discord (unlockable content) and IRL events involving networking, blockchain technology, software, and coding innovations. Two teen brothers started the project looking to empower today’s youth and encourage them to be creative and venture into entrepreneurship. In the Discord, Martians will be granted access to groups that interact with other youth creatives and provide a platform for our founders to educate and provide tutorials. These tutorials will allow you to create your own collection, code your own contract, and ultimately create your own community. Our IRL events will be centered around networking — creating a community of like-minded individuals and presenting opportunities to meet, learn from, and interact with today’s tech leaders. Mint a MetaMartian and join the youth movement of creators!'
  },
  roadMap: [
    {
      textLeft: '10%',
      textRight: 'About Web 3.0 video release. Bonus: Generating metadata for images in a Solana collection (Discord)'
    },
    {
      textLeft: '20%',
      textRight: 'Metaplex Candy Machine tutorial video release on Discord (uploading the collection to the blockchain)'
    },
    {
      textLeft: '30%',
      textRight: 'IRL networking event: location TBD. Bonus: Connecting the Candy Machine to a landing page tutorial release (Discord)'
    },
    {
      textLeft: '40%',
      textRight: 'Community vote on purchase of NFT collectible created by a young entrepreneur (Discord will be loaded with information and education around the collectible — why it is valuable, rarity relevances, token utility, etc)'
    },
    {
      textLeft: '50%',
      textRight: 'Solana Collection SOLD OUT! IRL networking party to celebrate whitelist backers and ANNOUNCE Ethereum minting. CHARITY: $10k donation to Code.org to help expand access to computer science for underrepresented students'
    },
    {
      textLeft: '60%',
      textRight: 'Exclusive merch release by Cards and Culture'
    },
    {
      textLeft: '70%',
      textRight: 'Community vote on purchase of a historic collectible (Cryptopunks, Bored Ape, Degen Ape, etc)'
    },
    {
      textLeft: '80%',
      textRight: 'Generate metadata, deploy a smart contract, and create a landing page for Ethereum tutorial (Discord). Bonus: Tutorial release on how to build a community'
    },
    {
      textLeft: '90%',
      textRight: 'CONTEST: create your own artwork for the founders to pick a winner — winner gets to mint their contract with the founders and create a video for YouTube, Twitch, etc'
    },
    {
      textLeft: '100%',
      textRight: 'GIVEAWAY — $50k in ETH, 10 NFT’s, charity donation of $25k, possible tech conference in a larger regional location (New Orleans, Houston, Chicago, etc)'
    },
  ],
  teamMembers: [
    {
      teamMemberImage: teamMember1,
      teamMemberName: "Jordan",
      teamMemberLink: "https://twitter.com/_jrdn___",
      teamMemberTitle: "Developer",
      teamMemberDescription: " 16 year-old aspiring full stack developer"
    },
    {
      teamMemberImage: teamMember2,
      teamMemberName: "Zach",
      teamMemberLink: "https://twitter.com/MetaZach8",
      teamMemberTitle: "Artist",
      teamMemberDescription: " 14 year-old aspiring entrepreneur and artist"
    },
    {
      teamMemberImage: teamMember3,
      teamMemberName: "Anthony",
      teamMemberLink: "https://twitter.com/anthony_ranaudo/",
      teamMemberTitle: "Director of Marketing",
      teamMemberDescription: " Co-Founder of Cards and Culture"
    },
    {
      teamMemberImage: teamMember4,
      teamMemberName: "Brandie",
      teamMemberLink: "https://twitter.com/BrandieWilks/",
      teamMemberTitle: "Brand Influencer",
      teamMemberDescription: " Olympic Beach Volleyball athlete"
    },
    {
      teamMemberImage: teamMember5,
      teamMemberName: "Vito",
      teamMemberLink: "https://twitter.com/vittoriofragale",
      teamMemberTitle: "Creative Director",
      teamMemberDescription: " Co-Founder of Cards and Culture"
    }
  ],
  footerLinks: [
    {
      image: twitterLogo,
      link: 'https://twitter.com/TheMetaMartians'
    },
    {
      image: discordLogo,
      link: 'https://discord.gg/u3c9Kf3Xmz'
    },
    {
      image: MediumLogo,
      link: 'https://metamartians.medium.com/'
    }
  ],
  footerText: "All rights reserved",
};

export default Config;