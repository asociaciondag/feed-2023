import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import vento from "lume/plugins/vento.ts";
import inline from "lume/plugins/inline.ts";
import basePath from "lume/plugins/base_path.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
  location: new URL("https://dag.gal/feed2023/"),
});

site.use(postcss());
site.use(vento());
site.use(inline());
site.use(basePath());
site.use(metas());
site.copy("img");
site.copy("isaac");

export default site;
