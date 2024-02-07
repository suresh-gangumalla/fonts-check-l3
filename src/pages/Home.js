import Blits from '@lightningjs/blits'
import Metadata from '../components/Metadata'

export default Blits.Component('Loading', {
  components: {
    Metadata,
  },
  template: `
    <Element w="1920" h="1080" color="#000">
      <Text x="100" y="20" color="green" content="Inter Black MSDF font rendering with size & line height 128"/>
      <Metadata x="100" y="100" title="Wonka" font="Black" />
      <Metadata x="900" y="100" title="Migration" font="Black" />
      
<!--       <Text x="100" y="400" color="green" content="Inter Black TTF rendering with size & line height 128"></Text> -->
<!--       <Metadata x="100" y="500" title="Wonka" font="TBlack" /> -->
<!--       <Metadata x="900" y="500" title="Migration" font="TBlack" /> -->
    </Element>
  `,
})
