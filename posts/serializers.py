from rest_framework import serializers

from authentication.serializers import AccountSerializer
from posts.models import Post

class PostSerializer(serializers.ModelSerializer):
    author = AccountSerializer(read_only=True, required=False)
    
    class Meta:
        model = Post
        
        fields = ('id', 'author', 'name', 'content', 'search_word', 'field', 'location', 'created_at', 'updated_at')
        read_only_fields = ('id', 'created_at', 'updated_at')
        
        def create(self, validated_data):
            return Post.objects.create(**validated_data)
        
    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(PostSerializer, self).get_validation_exclusions()
        
        return exclusions + ['author']