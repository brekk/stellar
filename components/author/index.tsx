import type { RawPackage } from '@/components/package/types'

export type Author = {
  name: string,
  avatar: string,
  bio: string,
  website: string,
  packages: RawPackage[]
}


