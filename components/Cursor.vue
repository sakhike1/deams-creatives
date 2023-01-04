<!-- <template>
  <div class="app">
    <div class="cursor"></div>
    <div class="cursor2"></div>
  </div>
</template>

<script>
var cursor = document.querySelector('.cursor')
var cursor2 = document.querySelector('.cursor2')
document.addEventListener('mousemove', function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    'left:' + e.clientX + 'px; top: ' + e.clientY + 'px;'
})
</script>

<style>
.cursor {
  position: fixed;
  width: 50px;
  height: 50px;
  border: 1px solid #c6c6c6;
  border-radius: 50%;
  left: 0;
  top: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
}
.cursor2 {
  position: fixed;
  width: 8px;
  height: 8px;
  border: 1px solid #c6c6c6;
  border-radius: 50%;
  left: 0;
  top: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
}
</style> -->