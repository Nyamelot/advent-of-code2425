import { HystorianId } from "./sort_id.ts";

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const columns_id = new HystorianId();
  columns_id.operate();
}
