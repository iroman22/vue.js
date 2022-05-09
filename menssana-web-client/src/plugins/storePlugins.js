import { $api } from "@/services/index";

export default function(store) {
  try {
    store.$api = $api;
  } catch (e) {
    console.error(e);
  }
}