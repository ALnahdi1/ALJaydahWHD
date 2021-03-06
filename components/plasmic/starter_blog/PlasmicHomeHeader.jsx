// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hCM3hC4zQpJSNHUsRLht47
// Component: qCWeyD4UDfO
import * as React from "react";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import AuthorBio from "../../AuthorBio"; // plasmic-import: DLImxWvI_-d/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_starter_blog.module.css"; // plasmic-import: hCM3hC4zQpJSNHUsRLht47/projectcss
import * as sty from "./PlasmicHomeHeader.module.css"; // plasmic-import: qCWeyD4UDfO/css
import HeartJonPhillips01SvgIcon from "./icons/PlasmicIcon__HeartJonPhillips01Svg"; // plasmic-import: SfqfHq4MPn/icon

export const PlasmicHomeHeader__VariantProps = new Array();

export const PlasmicHomeHeader__ArgProps = new Array("title");

function PlasmicHomeHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(defaultcss.all, sty.link)}
        component={Link}
        href={"/"}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Plasmic Starter Blog",
          value: args.title,
          className: classNames(sty.slotTitle)
        })}
      </p.PlasmicLink>

      <AuthorBio
        data-plasmic-name={"authorBio"}
        data-plasmic-override={overrides.authorBio}
        className={classNames("__wab_instance", sty.authorBio)}
        description={
          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox
            )}
          >
            {"Together for a better world "}
          </div>
        }
        profilepic={
          <HeartJonPhillips01SvgIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(defaultcss.all, sty.svg)}
            role={"img"}
          />
        }
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "link", "authorBio", "svg", "freeBox"],
  link: ["link"],
  authorBio: ["authorBio", "svg", "freeBox"],
  svg: ["svg"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomeHeader__ArgProps,
      internalVariantPropNames: PlasmicHomeHeader__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHomeHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeHeader";
  } else {
    func.displayName = `PlasmicHomeHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeHeader = Object.assign(
  // Top-level PlasmicHomeHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    authorBio: makeNodeComponent("authorBio"),
    svg: makeNodeComponent("svg"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicHomeHeader
    internalVariantProps: PlasmicHomeHeader__VariantProps,
    internalArgProps: PlasmicHomeHeader__ArgProps
  }
);

export default PlasmicHomeHeader;
/* prettier-ignore-end */
