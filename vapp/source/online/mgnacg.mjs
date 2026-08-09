import SourceOnline from "./root.mjs";

export default class SourceMgnAcg extends SourceOnline {
    async format(raw) {
        const r = [];
        for (const item of raw.list || []) {
            r.push(this._genRlist(
                item.name.replace(/ Part (\d+)$/i, " 第$1部分"),
                `https://${this.siteUrl}/media/${item.id}/`
            ));
        }
        return r;
    }
}
