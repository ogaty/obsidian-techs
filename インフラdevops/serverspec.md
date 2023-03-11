gemで動かすものだからもう使うことはないだろうな

```ruby
# パッケージがインストールされているか確認する 
describe package('git') do 
	it { 
		should be_installed 
	} 
end 

# 複数のパッケージがインストールされているかまとめて確認する 
%w{autoconf bison flex gcc gcc-c++ kernel-devel make m4}.each do 
	|pkg| describe package(pkg) do 
		it { 
			should be_installed 
		} 
	end 
end 

# 指定のバージョンのパッケージがインストールされているか確認する 
describe package('td-agent') do 
	it { 
		should be_installed.with_version('1') 
	} 
end

# コマンドの標準出力から指定のバージョンがインストールされているか確認する 
describe command('ruby -v') do 
		its(:stdout) { 
			should match /ruby 2\.1\.4/ 
		} 
end 

# コマンドのリターンコードからパスが通っているか確認する 
describe command('which mysql') do 
	its(:exit_status) { 
		should eq 0 
	} 
end 

# sudoせずコマンドを実行する 
describe command('which mysql') do 
	let(:disable_sudo) { 
		true 
	} 
	its(:exit_status) { 
		should eq 0 
	} 
end 

# sudoするユーザを指定する 
describe command('which mysql') do 
	let(:sudo_options) { 
		'-u user01 -i'
	} 
	its(:exit_status) { 
		should eq 0 
	} 
end
```