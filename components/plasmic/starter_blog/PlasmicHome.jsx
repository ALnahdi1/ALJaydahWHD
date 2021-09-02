// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hCM3hC4zQpJSNHUsRLht47
// Component: P5hTgQX4c1R
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import HomeHeader from "../../HomeHeader"; // plasmic-import: qCWeyD4UDfO/component
import ListItem from "../../ListItem"; // plasmic-import: XRuGHc6b6GU/component
import Footer from "../../Footer"; // plasmic-import: jjfzFrKnzEV/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_starter_blog.module.css"; // plasmic-import: hCM3hC4zQpJSNHUsRLht47/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: P5hTgQX4c1R/css

export const PlasmicHome__VariantProps = new Array();

export const PlasmicHome__ArgProps = new Array();

function PlasmicHome__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <React.Fragment>
      <Head>
        <title key="title">{"http://www.ALjawdahWHD.com"}</title>
        <meta
          key="og:title"
          property="og:title"
          content={"http://www.ALjawdahWHD.com"}
        />

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
            className={classNames(defaultcss.all, sty.freeBox___58TAd)}
          >
            <HomeHeader
              data-plasmic-name={"homeHeader"}
              data-plasmic-override={overrides.homeHeader}
              className={classNames("__wab_instance", sty.homeHeader)}
              title={
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.freeBox__jUdTt
                  )}
                >
                  {"World heart Day"}
                </div>
              }
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"container"}
              data-plasmic-override={overrides.container}
              hasGap={true}
              className={classNames(defaultcss.all, sty.container)}
            >
              <ListItem
                date={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__yHjRz
                    )}
                  >
                    {
                      "Created by the World Heart Federation, World Heart Day informs people around the globe that CVD, including heart disease and stroke, is the world’s leading cause of death claiming 18.6 million lives each year, and highlights the actions that individuals can take to prevent and control CVD. It aims to drive action to educate people that by controlling risk factors such as tobacco use, unhealthy diet and physical inactivity, at least 80% of premature deaths from heart disease and stroke could be avoided."
                    }
                  </div>
                }
                description={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__inXdg
                    )}
                  >
                    {"29 of september."}
                  </div>
                }
                title={"What's (World Heart Day)"}
              />

              <ListItem
                className={classNames("__wab_instance", sty.listItem___03Rur)}
                date={"March 1, 2020"}
                description={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox___2Gal5
                    )}
                  >
                    {
                      "Harnessing the power of digital health to improve awareness, prevention and management of CVD globally is our goal for Word Heart Day 2021. Telehealth has a huge role to play as we continue to Use Heart To Beat CVD."
                    }
                  </div>
                }
                title={"How to support?"}
              />

              <ListItem
                className={classNames("__wab_instance", sty.listItem__g4Huv)}
                date={null}
                description={
                  "PHeart disease can be genatic.Or it can come from other condition's like.Not working or moving your body enough.Or if you dont sleep well.Or if u don't eat healthy food."
                }
                title={"How to people get heart diseses? "}
              />

              <ListItem
                className={classNames("__wab_instance", sty.listItem___5SOvW)}
                date={null}
                description={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.freeBox__rzUF
                    )}
                  >
                    {
                      "You can avoid heart disease by either work your body enough or eat healthy food and knowing the cause of  a heart disease will let you know how to avoid it."
                    }
                  </div>
                }
                title={"How to avoid it?"}
              />
            </p.Stack>

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
  root: ["root", "homeHeader", "container", "footer"],
  homeHeader: ["homeHeader"],
  container: ["container"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    homeHeader: makeNodeComponent("homeHeader"),
    container: makeNodeComponent("container"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */