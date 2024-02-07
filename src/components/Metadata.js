import Blits from '@lightningjs/blits'

export default Blits.Component('Metadata', {
  template: `
    <Element>
      <Text color="white" :font="$font" size="$fontSize" lineheight="$lineHeight" :content="$title" @loaded="$onTitleLoaded" />
      <Element :y="$circleY" w="100" h="100" color="grey" :effects="[$shader('radius', {radius:50})]"/>
    </Element>
  `,
  props: ['title', 'font'],
  state() {
    return {
      fontSize: 128,
      lineHeight: 128,
      circleY: 100,
    }
  },
  methods: {
    onTitleLoaded(dimensions) {
      this.circleY = dimensions.h
      this.$log.info(
        `With ${this.font} Font the Title "${this.title}" rendered Height is ${dimensions.h}`
      )
    },
  },
})
