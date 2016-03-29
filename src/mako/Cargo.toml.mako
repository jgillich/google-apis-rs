<%! from util import (estr, hash_comment, library_to_crate_name, to_extern_crate_name) %>\
<%namespace name="util" file="lib/util.mako"/>\
<%block filter="hash_comment">\
<%util:gen_info source="${self.uri}" />\
</%block>
[package]

name = "${util.crate_name()}"
version = "${util.crate_version()}"
authors = [${",\n           ".join('"%s"' % a for a in cargo.authors)}]
description = "A complete library to interact with ${util.canonical_name()} (protocol ${version})"
repository = "${util.github_source_root_url()}"
% if documentationLink is not UNDEFINED and documentationLink:
homepage = "${documentationLink}"
% endif
documentation = "${cargo.doc_base_url}/${to_extern_crate_name(util.crate_name())}"
license = "${copyright.license_abbrev}"
keywords = ["${name[:20]}", ${", ".join(estr(cargo.keywords))}]
% if cargo.get('build_script'):
build = "${cargo.build_script}"
% endif

[features]
default = ["serde_codegen"]
nightly = ["serde_macros"]

% if cargo.get('is_executable', False):
[[bin]]
name = "${util.program_name()}"
% endif

[dependencies]
hyper = "0.7"
## Must match the one hyper uses, otherwise there are duplicate similarly named `Mime` structs
mime = "0.1.0"
serde = ">= 0.7.0"
serde_json = ">= 0.7.0"
yup-oauth2 = ">= 0.5.4"
serde_macros = { version = "*", optional = true }
% for dep in cargo.get('dependencies', list()):
${dep}
% endfor

[build-dependencies]
syntex = { version = ">= 0.23" }
serde_codegen = { version = ">= 0.6", optional = true }

% if make.depends_on_suffix is not None:

<% api_name = util.library_name() %>\
[dependencies.${library_to_crate_name(api_name, suffix=make.depends_on_suffix)}]
path = "../${api_name}"
% endif
