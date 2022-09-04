"use strict";

const Client = require("./lib/Client");

function apoloJS(token, options) {
    return new Client(token, options);
}

apoloJS.ApplicationCommand = require("./lib/structures/ApplicationCommand");
apoloJS.Attachment = require("./lib/structures/Attachment");
apoloJS.AutocompleteInteraction = require("./lib/structures/AutocompleteInteraction");
apoloJS.Base = require("./lib/structures/Base");
apoloJS.Bucket = require("./lib/util/Bucket");
apoloJS.CategoryChannel = require("./lib/structures/CategoryChannel");
apoloJS.Channel = require("./lib/structures/Channel");
apoloJS.CommandInteraction = require("./lib/structures/CommandInteraction");
apoloJS.ComponentInteraction = require("./lib/structures/ComponentInteraction");
apoloJS.Client = Client;
apoloJS.Collection = require("./lib/util/Collection");
apoloJS.Command = require("./lib/command/Command");
apoloJS.CommandClient = require("./lib/command/CommandClient");
apoloJS.Constants = require("./lib/Constants");
apoloJS.DiscordHTTPError = require("./lib/errors/DiscordHTTPError");
apoloJS.DiscordRESTError = require("./lib/errors/DiscordRESTError");
apoloJS.ExtendedUser = require("./lib/structures/ExtendedUser");
apoloJS.Guild = require("./lib/structures/Guild");
apoloJS.GuildChannel = require("./lib/structures/GuildChannel");
apoloJS.GuildIntegration = require("./lib/structures/GuildIntegration");
apoloJS.GuildPreview = require("./lib/structures/GuildPreview");
apoloJS.GuildScheduledEvent = require("./lib/structures/GuildScheduledEvent");
apoloJS.GuildTemplate = require("./lib/structures/GuildTemplate");
apoloJS.Interaction = require("./lib/structures/Interaction");
apoloJS.Invite = require("./lib/structures/Invite");
apoloJS.Member = require("./lib/structures/Member");
apoloJS.Message = require("./lib/structures/Message");
apoloJS.ModalSubmitInteraction = require("./lib/structures/ModalSubmitInteraction.js");
apoloJS.NewsChannel = require("./lib/structures/NewsChannel");
apoloJS.NewsThreadChannel = require("./lib/structures/NewsThreadChannel");
apoloJS.Permission = require("./lib/structures/Permission");
apoloJS.PermissionOverwrite = require("./lib/structures/PermissionOverwrite");
apoloJS.PingInteraction = require("./lib/structures/PingInteraction");
apoloJS.PrivateChannel = require("./lib/structures/PrivateChannel");
apoloJS.PrivateThreadChannel = require("./lib/structures/PrivateThreadChannel");
apoloJS.PublicThreadChannel = require("./lib/structures/PublicThreadChannel");
apoloJS.RequestHandler = require("./lib/rest/RequestHandler");
apoloJS.Role = require("./lib/structures/Role");
apoloJS.SequentialBucket = require("./lib/util/SequentialBucket");
apoloJS.Shard = require("./lib/gateway/Shard");
apoloJS.SharedStream = require("./lib/voice/SharedStream");
apoloJS.StageChannel = require("./lib/structures/StageChannel");
apoloJS.StageInstance = require("./lib/structures/StageInstance");
apoloJS.StoreChannel = require("./lib/structures/StoreChannel");
apoloJS.TextChannel = require("./lib/structures/TextChannel");
apoloJS.TextVoiceChannel = require("./lib/structures/TextVoiceChannel");
apoloJS.ThreadChannel = require("./lib/structures/ThreadChannel");
apoloJS.ThreadMember = require("./lib/structures/ThreadMember");
apoloJS.UnavailableGuild = require("./lib/structures/UnavailableGuild");
apoloJS.User = require("./lib/structures/User");
apoloJS.VERSION = require("./package.json").version;
apoloJS.VoiceChannel = require("./lib/structures/VoiceChannel");
apoloJS.VoiceConnection = require("./lib/voice/VoiceConnection");
apoloJS.VoiceConnectionManager = require("./lib/voice/VoiceConnectionManager");
apoloJS.VoiceState = require("./lib/structures/VoiceState");

module.exports = apoloJS;
