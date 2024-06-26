// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b7quyKoXXEc7j3kfrrzACm
// Component: YjnMp9aX3lnd

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button2 from "../../Button2"; // plasmic-import: fr68Tv_jysbT/component
import Card from "../../Card"; // plasmic-import: IdCO5j_5KcBS/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: b7quyKoXXEc7j3kfrrzACm/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: YjnMp9aX3lnd/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: qs2Ryhdxoqzl/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: CVF8c1f5P5YI/icon
import BookOpensvgIcon from "./icons/PlasmicIcon__BookOpensvg"; // plasmic-import: JtUKvvLJuQrz/icon
import BriefcasesvgIcon from "./icons/PlasmicIcon__Briefcasesvg"; // plasmic-import: _Su1OPm4TOWp/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  iconEducation?: Flex__<"svg">;
  diplomeTechniqueEnSystemesInformatique?: Flex__<"div">;
  iconEducation2?: Flex__<"svg">;
  diplomeTechniqueEnSystemesInformatique2?: Flex__<"div">;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__bf5Tj)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__nSw8C)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9AwgO
                )}
              >
                {"Philippe-Olivier Delia"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__skTvf
                )}
              >
                {
                  "College graduate with background in Help Desk IT and database management"
                }
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__am4Bi)}
              >
                <Button2
                  className={classNames("__wab_instance", sty.button2__j3Mvo)}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__b6LaV)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__iH3Jc)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___6Pw7E
                    )}
                  >
                    {"Start now ->"}
                  </div>
                </Button2>
                <Button2
                  className={classNames("__wab_instance", sty.button2__khHM)}
                  color={"clear"}
                  endIcon={
                    <Icon38Icon
                      className={classNames(projectcss.all, sty.svg__lO11L)}
                      role={"img"}
                    />
                  }
                  startIcon={
                    <ChecksvgIcon
                      className={classNames(projectcss.all, sty.svg__u2Mfv)}
                      role={"img"}
                    />
                  }
                  submitsForm={true}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__w8DA
                    )}
                  >
                    {"Learn more\u2026"}
                  </div>
                </Button2>
              </Stack__>
            </Stack__>
            <Card
              className={classNames("__wab_instance", sty.card__ugFbn)}
              title={
                <React.Fragment>
                  <BookOpensvgIcon
                    data-plasmic-name={"iconEducation"}
                    data-plasmic-override={overrides.iconEducation}
                    className={classNames(projectcss.all, sty.iconEducation)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vrRtn
                    )}
                  >
                    {"Education"}
                  </div>
                </React.Fragment>
              }
            >
              <div
                data-plasmic-name={"diplomeTechniqueEnSystemesInformatique"}
                data-plasmic-override={
                  overrides.diplomeTechniqueEnSystemesInformatique
                }
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.diplomeTechniqueEnSystemesInformatique
                )}
              >
                {"Diplome Technique en Systemes Informatique"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iVbQ
                )}
              >
                {"Certificate Soutien Technicien Informatique"}
              </div>
            </Card>
            <Card
              className={classNames("__wab_instance", sty.card__smDp7)}
              title={
                <React.Fragment>
                  <BriefcasesvgIcon
                    data-plasmic-name={"iconEducation2"}
                    data-plasmic-override={overrides.iconEducation2}
                    className={classNames(projectcss.all, sty.iconEducation2)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__er74Y
                    )}
                  >
                    {"Work"}
                  </div>
                </React.Fragment>
              }
            >
              <div
                data-plasmic-name={"diplomeTechniqueEnSystemesInformatique2"}
                data-plasmic-override={
                  overrides.diplomeTechniqueEnSystemesInformatique2
                }
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.diplomeTechniqueEnSystemesInformatique2
                )}
              >
                {"Help Desk IT agent level 2"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8H9T9
                )}
              >
                {"Senior Data Entry Clerk "}
              </div>
            </Card>
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "iconEducation",
    "diplomeTechniqueEnSystemesInformatique",
    "iconEducation2",
    "diplomeTechniqueEnSystemesInformatique2"
  ],
  iconEducation: ["iconEducation"],
  diplomeTechniqueEnSystemesInformatique: [
    "diplomeTechniqueEnSystemesInformatique"
  ],
  iconEducation2: ["iconEducation2"],
  diplomeTechniqueEnSystemesInformatique2: [
    "diplomeTechniqueEnSystemesInformatique2"
  ]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  iconEducation: "svg";
  diplomeTechniqueEnSystemesInformatique: "div";
  iconEducation2: "svg";
  diplomeTechniqueEnSystemesInformatique2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconEducation: makeNodeComponent("iconEducation"),
    diplomeTechniqueEnSystemesInformatique: makeNodeComponent(
      "diplomeTechniqueEnSystemesInformatique"
    ),
    iconEducation2: makeNodeComponent("iconEducation2"),
    diplomeTechniqueEnSystemesInformatique2: makeNodeComponent(
      "diplomeTechniqueEnSystemesInformatique2"
    ),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
