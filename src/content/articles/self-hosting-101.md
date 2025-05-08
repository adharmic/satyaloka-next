---
title: "Self-Hosting 101: A Beginner's Guide to Home Servers"
date: 1746621758000
---

# Introduction
It's never been easier to get started with a home server. With the widespread availability of quality open-source tooling, the greatest obstacle in the modern age is the paradox of choice. This will be a heavily-opinionated beginner's guide.

# Choosing Your Hardware (or lack thereof)
One of the first considerations you'll have to make when setting up a home server is _where_ to actually host all your services. There are a couple of options to that end. The fundamental delineation lies between cloud and on-premises hosting.

## Cloud Hosting
The mythical "cloud" really just refers to a server with the infrastructure required to make operating systems, applications, and services available over the Internet. There are a few different "levels" to cloud hosting:
- IaaS (Infrastructure as a Service): Provides the closest access to the bare-metal server. These services usually allow users to configure machine resources to their own discretion. IaaS will provide an experience most similar to having your own machine on-premises, with the added benefit of a transfer of liability and maintenance.
- PaaS (Platform as a Service): Provides the environment required for creating and running applications. These don't afford the granularity of having access to hardware resources, but eliminate the overhead of full server management. 
- SaaS (Software as a Service): These are services and applications that are hosted on cloud machines and usable over the Internet. Think Google Drive, Proton Mail, etc. This level is what we're trying to bypass by hosting our own services. There are a _lot_ of services we pay monthly subscriptions for that have completely free and open-source alternatives, given you have the patience and determination to host them yourself.

I would personally recommend opting for IaaS cloud providers or buying your own on-premises servers, as these offer the greatest control and provide the most opportunities to learn the finer details of system administration. Here are a couple of recommendations based on services I've used in the past:

### **DigitalOcean**

### **Hetzner**

## On-Premises
You might have heard the term "on-premises" or "on-prem" for short in reference to server hosting. This refers to servers that are within physical proximity of you. Basically, you'd be able to pull the power cord out of the machine by hand. This is an oversimplification, but for most home servers, I believe this is accurate enough. A starting home server doesn't need state-of-the-art specs (unless you plan on self-hosting LLMs or other processing/memory-intensive tasks), so even an old laptop or throwaway PC will do the job for most people.

Let's go through a couple of popular options for your own on-prem hardware.

### **Raspberry Pi**
The Pi might not look like much, but it's surprisingly versatile and capable of supporting a plethora of low-intensity services and tasks. I use one as a dedicated VPN as well as a reverse proxy for the rest of my services. This article won't cover the various different models of Raspberry Pi available, so here's a write-up from [RaspberryTips](https://raspberrytips.com/raspberry-pi-models/) that goes over your options. If your use case is lightweight or your budget is restricted, a Raspberry Pi might serve as a great introduction to the world of self-hosting.

Raspberry Pis come with their own dedicated operating system - Raspberry Pi OS (formerly Raspbian) - which is essentially a port of Debian built for the architecture of the Pi. Most importantly, Raspberry Pi OS uses APT for its package management, meaning it has excellent compatibility with most of the beginner Linux content available on the World Wide Web (which is usually geared towards Ubuntu, another Debian-based Linux distribution). 

### **Lenovo ThinkCentre**

# Setting up Home Base
Now that you've got your machine ready, it's time to get the software set up. This is going to require a few key choices. First up, the operating system.

## So Many Flavors!

