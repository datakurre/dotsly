<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleImageUpload(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files && target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch("imageUploaded", {
          src: reader.result,
          fileName: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  }
</script>

<div class="image-upload">
  <label class="upload-label">
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#555"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="vertical-align: middle;"
    >
      <path d="M12 16V4" />
      <polyline points="8 8 12 4 16 8" />
      <rect x="4" y="16" width="16" height="4" rx="2" />
    </svg>
    <span>Upload image</span>
    <input
      type="file"
      accept="image/png, image/jpeg"
      on:change={handleImageUpload}
    />
  </label>
</div>
