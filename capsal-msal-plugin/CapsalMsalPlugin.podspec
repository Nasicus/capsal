
  Pod::Spec.new do |s|
    s.name = 'CapsalMsalPlugin'
    s.version = '0.0.1'
    s.summary = 'My msal plugin'
    s.license = 'MIT'
    s.homepage = 'https://github.com/Nasicus/d2-holy-grail.git'
    s.author = 'Patrick'
    s.source = { :git => 'https://github.com/Nasicus/d2-holy-grail.git', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end