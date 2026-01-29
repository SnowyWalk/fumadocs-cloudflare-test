import { defineCloudflareConfig } from '@opennextjs/cloudflare';

export default defineCloudflareConfig({
  // 캐싱 및 ISR(증분 정적 재생성)을 위한 설정입니다.
  // KV 바인딩 이름은 기본값이 "NEXT_CACHE_WORKERS_KV"입니다.
  // 필요하다면 나중에 wrangler.toml에서 kv_namespaces를 추가할 수 있습니다.
});