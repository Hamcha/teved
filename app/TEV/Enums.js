/* @flow */

export type Channel = string

export const Channels: { [key: string]: Channel } = {
	Red:   "GX_CH_RED",
	Green: "GX_CH_GREEN",
	Blue:  "GX_CH_BLUE",
	Alpha: "GX_CH_ALPHA"
};

export type Konst = string

export const Konsts: { [key: string]: Konst } = {
	"1"    : "GX_TEV_KCSEL_1",
	"7/8"  : "GX_TEV_KCSEL_7_8",
	"3/4"  : "GX_TEV_KCSEL_3_4",
	"5/8"  : "GX_TEV_KCSEL_5_8",
	"1/2"  : "GX_TEV_KCSEL_1_2",
	"3/8"  : "GX_TEV_KCSEL_3_8",
	"1/4"  : "GX_TEV_KCSEL_1_4",
	"1/8"  : "GX_TEV_KCSEL_1_8",
	"K0"   : "GX_TEV_KCSEL_K0",
	"K1"   : "GX_TEV_KCSEL_K1",
	"K2"   : "GX_TEV_KCSEL_K2",
	"K3"   : "GX_TEV_KCSEL_K3",
	"K0.R" : "GX_TEV_KCSEL_K0_R",
	"K1.R" : "GX_TEV_KCSEL_K1_R",
	"K2.R" : "GX_TEV_KCSEL_K2_R",
	"K3.R" : "GX_TEV_KCSEL_K3_R",
	"K0.G" : "GX_TEV_KCSEL_K0_G",
	"K1.G" : "GX_TEV_KCSEL_K1_G",
	"K2.G" : "GX_TEV_KCSEL_K2_G",
	"K3.G" : "GX_TEV_KCSEL_K3_G",
	"K0.B" : "GX_TEV_KCSEL_K0_B",
	"K1.B" : "GX_TEV_KCSEL_K1_B",
	"K2.B" : "GX_TEV_KCSEL_K2_B",
	"K3.B" : "GX_TEV_KCSEL_K3_B",
	"K0.A" : "GX_TEV_KCSEL_K0_A",
	"K1.A" : "GX_TEV_KCSEL_K1_A",
	"K2.A" : "GX_TEV_KCSEL_K2_A",
	"K3.A" : "GX_TEV_KCSEL_K3_A"
};
