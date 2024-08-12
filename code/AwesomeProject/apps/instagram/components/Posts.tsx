import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import Post from './Post';

const Posts = ({
  Header,
  posts,
  isLoading,
  isFetching,
  isRefreshing,
  fetchMore,
  refresh,
}) => {
  return (
    <FlatList
      ListHeaderComponent={Header}
      data={posts}
      renderItem={({item: post}) => (
        <Post
          key={post.image}
          avatar={post.avatar}
          image={{uri: post.image}}
          username={post.username}
          likedByAvatars={post?.likedBy?.avatars}
          likesCount={post?.likes}
          likedByUsernames={post?.likedBy?.usernames?.join(', ')}
          caption={post?.caption}
        />
      )}
      keyExtractor={(post, i) => post.image + i}
      ListEmptyComponent={
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>You've caught it all! </Text>
        </View>
      }
      onEndReached={isFetching || isLoading ? undefined : fetchMore}
      refreshing={!!isRefreshing}
      onRefresh={refresh}
      ListFooterComponent={
        isFetching ? (
          <View
            style={{
              minHeight: 130,
              justifyContent: 'center',
              marginHorizontal: 20,
              paddingBottom: 20,
            }}>
            <ActivityIndicator />
          </View>
        ) : undefined
      }
    />
  );
};

export default Posts;
