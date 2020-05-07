<template>
  <component
    :is="icon"
    :class="$s.Icon"
    :aria-label="ariaLabel ? ariaLabel : name"
    :role="role"
    version="1.1"
    @click="handleClick"
  />
</template>

<script>
function getIcon(name) {
  try {
    const icon = require(`Assets/icons/${name}.svg`).default;
    return icon;
  } catch (e) {
    return false;
  }
}

export default {
  name: 'UiIcon',

  props: {
    name: {
      type: String,
      required: true,
      validator(name) {
        const icon = getIcon(name);
        if (!icon) {
          throw new Error(`UiIcon: Icon "${name}" not found.`);
        }
        return icon;
      },
    },
    ariaLabel: {
      type: String,
      default: undefined,
    },
    role: {
      type: String,
      default: 'img',
      validator: (value) => ['img', 'presentation'].includes(value),
    },
  },

  computed: {
    icon() {
      return getIcon(this.name);
    },
  },

  methods: {
    handleClick() {
      this.$emit('click');
    },
  },

  exists(name) {
    return !!getIcon(name);
  },
};
</script>

<style module="$s">
.Icon {
  display: inline-block;
  font-size: 0;
  line-height: 0;

  & polygon,
  & path,
  & circle {
    fill: currentColor;
  }

  & > svg {
    width: 100%;
    height: auto;
  }
}
</style>
