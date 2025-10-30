import { MediaType } from "./mediaType";
import { EPG } from "./epg";

export class Channel {
  id?: number;
  name?: string;
  group_id?: number;
  image?: string;
  url?: string;
  media_type?: MediaType;
  source_id?: number;
  favorite?: boolean;
  stream_id?: number;
  tv_archive?: boolean;
  current_epg?: EPG;
}
