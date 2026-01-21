# Questions related to the Design:-

## Why did you reference Songs in the Playlist instead of embedding them?
The relation between the songs and playlists is that we can relate the song_name and the playlist_name assigned to the particular user. It will be one to many relationship as one user can create many playlist but each playlist can only have one user assigned. The cardinality of thye code much more which will make it harder to debug and slow to read which is why referencing is a better method in this relationship.

## Why did you reference the Artist in the Song model?
The relation between Albums and songs that we can relate them by the object_ID of each and every song and embedding as an array inside the Album schema. This is a one to many relationship as An album can have many songs but every song have only one album assigned.