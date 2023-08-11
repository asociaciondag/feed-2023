import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import vento from "lume/plugins/vento.ts";

const site = lume();

site.use(postcss());
site.use(vento());

export default site;
