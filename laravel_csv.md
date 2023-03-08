StreamedResponseを使う

```
/**
 * csvエクスポート
 *
 */
public function csv_export()
{
    return  new StreamedResponse(
        function () {
            $stream = fopen('php://output', 'w');
            fputcsv($stream, ['ID', '名前', 'email', 'created', 'updated', 'deleted']);
            User::chunk(100, function ($users) use ($stream) {
                foreach ($users as $user) {
                    fputcsv($stream, [$user->id, $user->name, $user->email, $user->created_at, $user->updated_at, $user->deleted_at]);
                }
            });
            fclose($stream);
        },
        200,
        [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="users.csv"',
        ]
    );
}
```