List操作関数、arrayじゃない
https://qiita.com/nskydiving/items/c9c47c1e48ea365f8995

```cs
using System; 
using System.Linq; 
using System.Collections.Generic; 
namespace LinqTest { 
	class MainClass { 
		public static void Main(string[] args) { 
			var list = new List<int> { 1, 84, 95, 95, 40, 6 }; 
			
			// list の最初の要素を取得する 
			Console.WriteLine("First: " + list.First()); 
			// list の最後の要素を取得する 
			Console.WriteLine("Last: " + list.Last()); 
		} 
	} 
}
```

```cs
using System; 
using System.Linq; 
using System.Collections.Generic; 
namespace LinqTest { 
	class MainClass { 
		public static void Main(string[] args) { 
			var list = new List<int> { 1, 84, 95, 95, 40, 6 }; 
			// list の最大値を取得
			Console.WriteLine("Max: " + list.Max()); // list の最小値を取得
			Console.WriteLine("Min: " + list.Min()); // list の平均値を取得
			Console.WriteLine("Average: " + list.Average()); 
			// list の合計値を取得 
			Console.WriteLine("Sum: " + list.Sum()); 
			// list の要素値を取得 
			Console.WriteLine("Count: " + list.Count()); 
		} 
	} 
}
```