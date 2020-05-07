<script>
export default {
  name: 'LayerMounter',

  functional: true,

  props: {
    component: {
      type: Object,
      required: true,
    },
    data: {
      type: Object,
      default: undefined,
    },
  },

  render: (h, { props, data }) => h(
    props.component,
    {
      ...props.data,
      class: data.class,
    },
  ),
};
</script>
