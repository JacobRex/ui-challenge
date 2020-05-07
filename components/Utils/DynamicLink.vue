<script>
export default {
  name: 'DynamicLink',

  props: {
    to: {
      type: [String, Object],
      default: undefined,
    },
  },

  computed: {
    isExternalLink() {
      const regex = /^(https?:)?\/\//i;
      return (typeof this.to === 'string' && regex.test(this.to));
    },

    hasRoute() {
      if (this.$router) {
        const resolved = this.$router.resolve(this.to);
        return (resolved.resolved.matched.length > 0);
      }
      if (this.$nuxt && this.$nuxt.$router) {
        const resolved = this.$nuxt.$router.resolve(this.to);
        return (resolved.resolved.matched.length > 0);
      }
      return false;
    },
  },

  render() {
    const vnodeData = { on: this.$listeners };

    if (
      this.hasRoute && (this.to instanceof Object || !this.isExternalLink)
    ) {
      return (
        <RouterLink
          to={this.to}
          {...vnodeData}
        >
          {this.$slots.default}
        </RouterLink>
      );
    }

    return (
      <a
        href={this.to}
        {...vnodeData}
      >
        {this.$slots.default}
      </a>
    );
  },
};
</script>
