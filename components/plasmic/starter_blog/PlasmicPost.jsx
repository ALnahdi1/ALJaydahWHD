// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hCM3hC4zQpJSNHUsRLht47
// Component: PaCVbKIAHM-
import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import PostHeader from "../../PostHeader"; // plasmic-import: nPY6yCi_Evh/component
import AuthorBio from "../../AuthorBio"; // plasmic-import: DLImxWvI_-d/component
import Footer from "../../Footer"; // plasmic-import: jjfzFrKnzEV/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_starter_blog.module.css"; // plasmic-import: hCM3hC4zQpJSNHUsRLht47/projectcss
import * as sty from "./PlasmicPost.module.css"; // plasmic-import: PaCVbKIAHM-/css
import PlasmicLogoIcon from "./icons/PlasmicIcon__PlasmicLogo"; // plasmic-import: F7oVwXr5Hkm/icon

export const PlasmicPost__VariantProps = new Array();

export const PlasmicPost__ArgProps = new Array("contents");

function PlasmicPost__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__kpeci)}
          >
            <PostHeader
              data-plasmic-name={"postHeader"}
              data-plasmic-override={overrides.postHeader}
              blogTitle={"Plasmic Starter Blog"}
              className={classNames("__wab_instance", sty.postHeader)}
              date={"January 1, 2020"}
              postTitle={"Hello world"}
            />

            <div className={classNames(defaultcss.all, sty.freeBox__xxUdj)}>
              <div
                data-plasmic-name={"container"}
                data-plasmic-override={overrides.container}
                className={classNames(defaultcss.all, sty.container)}
              >
                {p.renderPlasmicSlot({
                  defaultContents:
                    "Blogging is so much fun! I could write on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on and on",
                  value: args.contents
                })}
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__jr69Q)} />

            <AuthorBio
              data-plasmic-name={"authorBio"}
              data-plasmic-override={overrides.authorBio}
              className={classNames("__wab_instance", sty.authorBio)}
              description={"Built with love by the Plasmic team. "}
              profilepic={
                <PlasmicLogoIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(defaultcss.all, sty.svg)}
                  role={"img"}
                />
              }
            />

            <div className={classNames(defaultcss.all, sty.freeBox__p6U1P)}>
              <p.PlasmicLink
                data-plasmic-name={"previousPost"}
                data-plasmic-override={overrides.previousPost}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.previousPost
                )}
                component={Link}
                platform={"nextjs"}
              >
                {"Previous post"}
              </p.PlasmicLink>

              <p.PlasmicLink
                data-plasmic-name={"nextPost"}
                data-plasmic-override={overrides.nextPost}
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.nextPost
                )}
                component={Link}
                platform={"nextjs"}
              >
                {"Next post"}
              </p.PlasmicLink>
            </div>

            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "postHeader",
    "container",
    "authorBio",
    "svg",
    "previousPost",
    "nextPost",
    "footer"
  ],

  postHeader: ["postHeader"],
  container: ["container"],
  authorBio: ["authorBio", "svg"],
  svg: ["svg"],
  previousPost: ["previousPost"],
  nextPost: ["nextPost"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPost__ArgProps,
      internalVariantPropNames: PlasmicPost__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPost__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPost";
  } else {
    func.displayName = `PlasmicPost.${nodeName}`;
  }
  return func;
}

export const PlasmicPost = Object.assign(
  // Top-level PlasmicPost renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    postHeader: makeNodeComponent("postHeader"),
    container: makeNodeComponent("container"),
    authorBio: makeNodeComponent("authorBio"),
    svg: makeNodeComponent("svg"),
    previousPost: makeNodeComponent("previousPost"),
    nextPost: makeNodeComponent("nextPost"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicPost
    internalVariantProps: PlasmicPost__VariantProps,
    internalArgProps: PlasmicPost__ArgProps
  }
);

export default PlasmicPost;
/* prettier-ignore-end */
