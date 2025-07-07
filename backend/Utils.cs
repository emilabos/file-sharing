
using System.Collections;

namespace AESEncryption
{
    public class Utils
    {
        public static void PrintEnumerable(IEnumerable collection)
        {
            if (collection == null)
            {
                Console.WriteLine("null");
                return;
            }

            Console.WriteLine(PrintEnumerableToString(collection));
        }

        private static string PrintEnumerableToString(IEnumerable collection)
        {
            if (collection == null) return "null";

            var result = new System.Text.StringBuilder();
            result.Append("[");

            bool first = true;
            foreach (var item in collection)
            {
                if (!first)
                    result.Append(", ");
                else
                    first = false;

                if (item is string)
                {
                    result.Append(item);
                }
                else if (item is IEnumerable nested && !(item is string))
                {
                    result.Append(PrintEnumerableToString(nested));
                }
                else
                {
                    result.Append(item?.ToString() ?? "null");
                }
            }

            result.Append("]");
            return result.ToString();
        }
    }
}