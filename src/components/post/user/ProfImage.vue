<template>
  <div class="prof-image">
    <div v-if="!image" transition="replace">
      <img src="../../../assets/img/icon_prof.jpg" @click="onPopUp" />
      <input type="file" class="file-input"
             v-el:file-input accept='.jpg,.png,.gif,image/jpeg' @change="onFileChange">
    </div>
    <div v-else transition="replace">
      <div class="prof" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
      </div>
      <button class="btn-remove mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
              @click="removeImage">
        キャンセル
      </button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .prof-image
    width: 150px
    height: 150px
    background-image: url('../../../assets/img/icon_plus.png')
    background-size: cover
    margin-bottom: 50px

    img
      width: 150px
      max-height: 150px
      border: 1px solid #eee
      cursor: pointer
      &:hover
        opacity: .5

    .file-input
      display: none

    .prof
      position: relative
      display: inline-block
      background-color: #ccc
      background-position: center center
      background-repeat: no-repeat
      width: 150px
      height: 150px
      border: 1px solid #eee
      background-size: cover

    .btn-remove
      display: block
      margin: 0 auto
      height: 30px
      line-height: 30px

</style>

<script>
  export default {
    data: function () {
      return {
        image: ''
      }
    },
    methods: {
      onPopUp () {
        this.$els.fileInput.click()
      },

      onFileChange (e) {
        const files = e.target.files || e.dataTransfer.files
        // const files = e.target.files
        if (files.length)
          this.createImage(files[0])
      },

      createImage (file) {
        // let image = new Image()
        const reader = new FileReader()
        const vm = this

        reader.readAsDataURL(file)
        reader.onload = (e) => {
          vm.image = e.target.result
        }
      },

      removeImage (e) {
        console.log ('****')
        this.image = ''
      }
    }
  }
</script>
