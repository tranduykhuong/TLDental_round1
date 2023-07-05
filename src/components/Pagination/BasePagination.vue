<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import { ElPagination } from 'element-plus'; // Import the specific component from element-plus
import 'element-plus/dist/index.css';

const props = defineProps({
  total: { type: Number, required: true },
  currentPage: { type: Number, required: true },
  pageSize: { type: Number, required: true }
});

const background = ref(true);
const disabled = ref(false);
const emit = defineEmits(['size-change', 'current-change']);
const currentPageRef = ref(props.currentPage);

const handleSizeChange = (val: number) => {
  // Emit the size-change event to notify the parent component
  emit('size-change', val);
};

const handleCurrentChange = (val: number) => {
  // Emit the current-change event to notify the parent component
  emit('current-change', val);
  console.log(props.total);
  console.log(props.currentPage);
  console.log(props.pageSize);
};

// Export the variable or function using defineExpose
defineExpose({
  handleSizeChange,
  handleCurrentChange
});
</script>

<template>
  <div :class="$style['pagination']">
    <el-config-provider namespace="ep">
      <div class="demo-pagination-block">
        <el-pagination
          :value="currentPage"
          @input="currentPageRef = $event"
          :page-size="pageSize"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :disabled="disabled"
          :background="background"
          layout="prev, pager, next, jumper"
          :total="39"
          :class="$style['custom-pagination']"
        />
      </div>
    </el-config-provider>
  </div>
</template>
<style scoped module lang="scss">
@import '../Pagination/Pagination.module.scss';
</style>
