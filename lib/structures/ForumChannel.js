"use strict";

const Collection = require("../util/Collection");
const GuildChannel = require("./GuildChannel");
const Message = require("./Message");
const PublicThreadChannel = require('./PublicThreadChannel');

/**
* Represents a guild text channel. See GuildChannel for more properties and methods.
* @extends GuildChannel
* @prop {Number} defaultAutoArchiveDuration The default duration of newly created threads in minutes to automatically archive the thread after inactivity (60, 1440, 4320, 10080)
* @prop {String} lastMessageID The ID of the last message in this channel
* @prop {Number} lastPinTimestamp The timestamp of the last pinned message
* @prop {Collection<Message>} messages Collection of Messages in this channel
* @prop {Number} rateLimitPerUser The ratelimit of the channel, in seconds. 0 means no ratelimit is enabled
* @prop {String?} topic The topic of the channel
*/
class ForumChannel extends GuildChannel {
    constructor(data, client) {
        super(data, client);
        this.availableTags = [];
        this.defaultAutoArchiveDuration = data.default_auto_archive_duration;
        this.defaultReactionEmoji = null;
        this.defaultSortOrder = null;
        this.defaultThreadRateLimitPerUser = data.default_thread_rate_limit_per_user;
        this.flags = data.flags;
        this.lastThreadID = data.last_message_id;
        this.nsfw = data.nsfw;
        this.permissionOverwrites = new Collection(null, client);
        this.position = data.position;
        this.rateLimitPerUser = 0;
        this.template = data.template;
        this.threads = new Collection(PublicThreadChannel, client);
        this.topic = data.topic;
        this.update(data);
    }

    update(data) {
        super.update(data);
        if(data.available_tags !== undefined) {
            this.availableTags = data.available_tags.map((tag) => ({
                emoji:     tag.emoji_id === null && tag.emoji_name === null ? null : { id: tag.emoji_id, name: tag.emoji_name },
                id:        tag.id,
                moderated: tag.moderated,
                name:      tag.name
            }));
        }

        if (data.default_auto_archive_duration !== undefined) {
            this.defaultAutoArchiveDuration = data.default_auto_archive_duration;
        }
        if (data.default_reaction_emoji !== undefined) {
            this.defaultReactionEmoji = data.default_reaction_emoji === null || (data.default_reaction_emoji.emoji_id === null && data.default_reaction_emoji.emoji_name === null) ? null : { id: data.default_reaction_emoji.emoji_id, name: data.default_reaction_emoji.emoji_name };
        }
        if (data.default_sort_order !== undefined) {
            this.defaultSortOrder = data.default_sort_order;
        }
        if (data.default_thread_rate_limit_per_user !== undefined) {
            this.defaultThreadRateLimitPerUser = data.default_thread_rate_limit_per_user;
        }
        if (data.flags !== undefined) {
            this.flags = data.flags;
        }
        if (data.last_message_id !== undefined) {
            this.lastThread = data.last_message_id === null ? null : this.threads.get(data.last_message_id);
            this.lastThreadID = data.last_message_id;
        }

        if (data.nsfw !== undefined) {
            this.nsfw = data.nsfw;
        }
        if (data.permission_overwrites !== undefined) {
            for (const id of this.permissionOverwrites.keys()) {
                if (!data.permission_overwrites.some((overwrite) => overwrite.id === id)) {
                    this.permissionOverwrites.delete(id);
                }
            }

            for (const overwrite of data.permission_overwrites) {
                this.permissionOverwrites.update(overwrite);
            }
        }
        if (data.position !== undefined) {
            this.position = data.position;
        }
        if (data.rate_limit_per_user !== undefined) {
            this.rateLimitPerUser = data.rate_limit_per_user;
        }
        if (data.template !== undefined) {
            this.template = data.template;
        }
        if (data.topic !== undefined && data.topic !== null) {
            this.topic = data.topic;
        }
    }
    
    /**
    * Create an invite for the channel
    * @arg {Object} [options] Invite generation options
    * @arg {Number} [options.maxAge] How long the invite should last in seconds
    * @arg {Number} [options.maxUses] How many uses the invite should last for
    * @arg {Boolean} [options.temporary] Whether the invite grants temporary membership or not
    * @arg {Boolean} [options.unique] Whether the invite is unique or not
    * @arg {String} [reason] The reason to be displayed in audit logs
    * @returns {Promise<Invite>}
    */
    createInvite(options, reason) {
        return this._client.createChannelInvite.call(this._client, this.id, options, reason);
    }

    deletePermission(overwriteID = String, reason = String) {
        return this._client.deleteChannelPermission.call(this._client, this.id, overwriteID, reason)
    }

    edit(options) {
        return this._client.deletePermission.call(this._client, this.id, options); // review
    }

    editPermission(overwriteID = String, allow, deny, type, reason) {
        return this._client.editChannelPermission.call(this._client, this.id, overwriteID, allow, deny, type, reason);
    }

    /**
    * Get all invites in the channel
    * @returns {Promise<Array<Invite>>}
    */
    getInvites() {
        return this._client.getChannelInvites.call(this._client, this.id);
    }

    /**
    * Get joined private archived threads in this channel
    * @arg {Object} [options] Additional options when requesting archived threads
    * @arg {Date} [options.before] List of threads to return before the timestamp
    * @arg {Number} [options.limit] Maximum number of threads to return
    * @returns {Promise<Object>} An object containing an array of `threads`, an array of `members` and whether the response `hasMore` threads that could be returned in a subsequent call
    */
    getJoinedPublicArchivedThreads(options) {
        return this._client.getJoinedPublicArchivedThreads.call(this._client, this.id, options);
    }

    /**
    * Get all the webhooks in the channel
    * @returns {Promise<Array<Object>>} Resolves with an array of webhook objects
    */
    getWebhooks() {
        return this._client.getChannelWebhooks.call(this._client, this.id);
    }

    toJSON(props = []) {
        return super.toJSON([
            "lastMessageID",
            "lastPinTimestamp",
            "messages",
            "rateLimitPerUser",
            "topic",
            ...props
        ]);
    }
}

module.exports = ForumChannel;
