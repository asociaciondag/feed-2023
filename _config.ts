import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import vento from "lume/plugins/vento.ts";
import inline from "lume/plugins/inline.ts";

const site = lume();

site.use(postcss());
site.use(vento());
site.use(inline());
site.copy("img");
site.copy("isaac");

export default site;
