function FormatDate(str) {
if (str.length > 10) {
    return str.slice(0, 10);
  } else {
			return str;
		}
}
export default FormatDate;