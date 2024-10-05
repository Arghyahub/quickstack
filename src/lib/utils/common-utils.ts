class CommonUtils {
  public static checkIfNotNull(data: any) {
    if (data == undefined || data == null) return false;
    if (typeof data == "string" && data.length == 0) return false;
    return true;
  }
  public static onClient() {
    return typeof window !== "undefined";
  }
}

export default CommonUtils;
