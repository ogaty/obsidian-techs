# ListView

listviewには2種類ある
## ListView.Viewでグリッド
```
                <ListView x:Name="latlngList" Height="200" Margin="0, 10, 0, 0" ItemsSource="{Binding list}" SelectionChanged="latlngList_SelectionChanged">
                    <ListView.View>
                        <GridView>
                            <GridViewColumn Header="地名" DisplayMemberBinding="{Binding name}"></GridViewColumn>
                            <GridViewColumn Header="緯度" DisplayMemberBinding="{Binding lat}"></GridViewColumn>
                            <GridViewColumn Header="経度" DisplayMemberBinding="{Binding lng}"></GridViewColumn>
                        </GridView>
                    </ListView.View>
                </ListView>
```
## ItemTemplateでstackpanel
```
                <ListView x:Name="UserList" Height="260" Margin="0, 10, 0, 0" ItemsSource="{Binding fileList}" SelectionChanged="UserList_SelectionChanged">
                    <ListView.ItemTemplate>
                        <DataTemplate>
                            <StackPanel>
                                <TextBlock Text="{Binding fileName}"></TextBlock>
                            </StackPanel>
                        </DataTemplate>
                    </ListView.ItemTemplate>
                </ListView>
```

