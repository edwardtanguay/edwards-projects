class Camera:
	def __init__(self, name):
		self.name = name
	def capture_photo(self):
		print(self.name + " is taking a picture")
	def info(self):
		print(self.name + " is a camera")

class MusicPlayer:
	def __init__(self, name):
		self.name = name
	def play_music(self):
		print(self.name + " is playing music")
	def info(self):
		print(self.name + " is a music player")

class MultipurposeDevice(Camera, MusicPlayer):
	def __init__(self, name):
		self.name = name

canonEos = Camera("Canon EOS 5D Mark IV")
canonEos.capture_photo()
canonEos.info()

sonyCmt = MusicPlayer("Sony CMT-SBT100")
sonyCmt.play_music()
sonyCmt.info()

iPhone = MultipurposeDevice("Apple iPhone 15 Pro Max")
iPhone.play_music()
iPhone.capture_photo()
iPhone.info()

